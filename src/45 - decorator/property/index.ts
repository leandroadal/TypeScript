/* eslint-disable @typescript-eslint/no-explicit-any */

// ============================================================================
// 1. Readonly
// ============================================================================
function Readonly(target: any, propertyKey: string) {
  const privateKey = `_${propertyKey}`;

  Object.defineProperty(target, propertyKey, {
    get() {
      return this[privateKey];
    },
    set(newValue) {
      // Se já foi inicializado na instância, bloqueia a escrita
      if (privateKey in this) {
        throw new TypeError(
          `Cannot assign to read only property '${propertyKey}'`,
        );
      }
      this[privateKey] = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}

class User {
  @Readonly
  name: string = 'Alice';
}

const user = new User();
console.log(user.name); // Imprime: Alice
// user.name = 'Bob';   // Se tirar o comentário, lança o erro customizado de leitura de forma segura

// ============================================================================
// 2. Log de acesso
// ============================================================================
function LogAccess(target: any, propertyKey: string) {
  const privateKey = `_${propertyKey}`;

  Object.defineProperty(target, propertyKey, {
    get() {
      const val = this[privateKey];
      console.log(`GET "${propertyKey}": ${val}`);
      return val;
    },
    set(newValue) {
      console.log(`SET "${propertyKey}": ${newValue}`);
      this[privateKey] = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}

class Product {
  @LogAccess
  price: number = 0;
}

const p = new Product();
p.price = 99; // Imprime: SET "price": 99
console.log(p.price); // Imprime: GET "price": 99 e depois 99

// ============================================================================
// 3. LogProperty básico
// ============================================================================
function logProperty(target: object, propertyKey: string | symbol): void {
  console.log(`Decorando ${String(propertyKey)}`);
}

class Usuario {
  @logProperty
  email = '';
}

const usuario = new Usuario();
usuario.email = 'dez';
console.log(usuario.email);
console.log();

// ============================================================================
// 4. Validação Range
// ============================================================================
function Range(min: number, max: number) {
  return function (target: any, propertyKey: string) {
    const privateKey = `_${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
      get() {
        return this[privateKey];
      },
      set(newValue: number) {
        if (newValue < min || newValue > max) {
          throw new RangeError(
            `"${propertyKey}" deve estar entre ${min} e ${max}`,
          );
        }
        this[privateKey] = newValue;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

class Temperature {
  @Range(-50, 60)
  celsius: number = 0;
}

const t = new Temperature();
t.celsius = 25; //  OK
// t.celsius = 100; //  Se tirar o comentário, lança RangeError

// ============================================================================
// 5. Default Value — valor padrão lazy
// ============================================================================
function Default(defaultValue: any) {
  return function (target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get() {
        return this[`_${propertyKey}`] ?? defaultValue;
      },
      set(value) {
        this[`_${propertyKey}`] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

class Config {
  @Default('pt-BR')
  locale: string | undefined;
}

const c = new Config();
console.log(c.locale); // "pt-BR"
c.locale = 'en-US';
console.log(c.locale); // "en-US"

// ============================================================================
// 6. Serialize — marca campos para serialização
// ============================================================================
const serializableFields: Record<string, string[]> = {};

function Serialize(target: any, propertyKey: string) {
  const className = target.constructor.name;
  if (!serializableFields[className]) {
    serializableFields[className] = [];
  }
  serializableFields[className].push(propertyKey);
}

function toJSON(instance: any): object {
  const fields = serializableFields[instance.constructor.name] ?? [];
  return Object.fromEntries(fields.map((f) => [f, instance[f]]));
}

class Person {
  @Serialize name: string = 'Alice';
  @Serialize age: number = 30;
  password: string = 'secreta';
}

const person = new Person();
console.log(toJSON(person)); // { name: "Alice", age: 30 }
