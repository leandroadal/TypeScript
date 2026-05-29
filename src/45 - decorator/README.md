# TypeScript Decorators

Este guia apresenta o conceito de **Decorators** (Decoradores) no TypeScript, explicando seu funcionamento, configuração e os tipos mais comuns por meio de exemplos práticos.

---

## O que são Decorators?

Decorators são uma funcionalidade que permite adicionar metadados ou modificar o comportamento de classes, métodos, propriedades, acessores e parâmetros em tempo de execução. Eles utilizam a sintaxe `@expression`, onde `expression` deve avaliar uma função que será chamada com informações sobre a declaração decorada.

> **Nota:** Este guia utiliza o padrão de **decoradores experimentais** (Stage 2), que é amplamente adotado por frameworks como NestJS e Angular. O suporte nativo (Stage 3) está disponível a partir do TypeScript 5.0, mas a configuração experimental ainda é muito utilizada na indústria.

---

## Configuração

Para utilizar decorators no TypeScript, é necessário habilitar a opção `experimentalDecorators` no arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

## Tipos de Decorators

Existem cinco tipos principais de decorators no TypeScript:

1. [Decorators de Classe](#1-class-decorators)
2. [Decorators de Método](#2-method-decorators)
3. [Decorators de Propriedade](#3-property-decorators)
4. [Decorators de Acessor (Get/Set)](#4-accessor-decorators)
5. [Decorators de Parâmetro](#5-parameter-decorators)

---

### 1. Class Decorators

Aplicado ao construtor da classe. É útil para observar, modificar ou substituir a definição de uma classe.

#### Exemplo: Selar uma classe (evitar extensões)

```typescript
function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@Sealed
class ReportService {
  generate() {
    return "Relatório gerado";
  }
}
```

#### Exemplo: Adicionar propriedades dinamicamente

```typescript
function WithCreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

@WithCreatedAt
class User {
  name: string;
  constructor(name: string) {
    name = name;
  }
}

const user = new User("Alice") as any;
console.log(user.createdAt); // Exibe a data de criação
```

---

### 2. Method Decorators

Aplicado ao descritor de propriedade de um método. Pode ser usado para observar, modificar ou substituir a definição de um método.

Recebe três parâmetros:

1. O protótipo da classe (ou o construtor para membros estáticos).
2. O nome do método.
3. O descritor de propriedade (`PropertyDescriptor`).

#### Exemplo: Decorator de Log de Execução

```typescript
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`[LOG] Chamando ${propertyKey} com os argumentos: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`[LOG] Resultado de ${propertyKey}: ${result}`);
    return result;
  };

  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 10);
```

---

### 3. Property Decorators

Aplicado a uma propriedade da classe. Recebe dois parâmetros:

1. O protótipo da classe.
2. O nome da propriedade.

#### Exemplo: Validação simples de valor mínimo

```typescript
function MinLength(length: number) {
  return function (target: any, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length < length) {
        throw new Error(`A propriedade ${propertyKey} exige no mínimo ${length} caracteres.`);
      }
      value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class Account {
  @MinLength(5)
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}

// const acc = new Account("abc"); // Lança erro de validação
```

---

### 4. Accessor Decorators

Aplicado aos assessores de propriedade (getters ou setters). Recebe os mesmos três parâmetros de um decorator de método.

#### Exemplo: Configurar propriedade como Enumerable ou não

```typescript
function Enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Employee {
  private _salary: number = 5000;

  @Enumerable(false)
  get salary() {
    return this._salary;
  }
}
```

---

### 5. Parameter Decorators

Aplicado aos parâmetros de uma função/método. Recebe três parâmetros:

1. O protótipo da classe.
2. O nome do método (ou `undefined` para o construtor).
3. O índice numérico do parâmetro na lista de argumentos.

#### Exemplo: Registrar índice de parâmetros obrigatórios

```typescript
import "reflect-metadata"; // Necessário para metadados mais complexos

const requiredMetadataKey = Symbol("required");

function Required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

class UserService {
  greet(@Required name: string, @Required role: string) {
    console.log(`Olá ${name}, seu cargo é ${role}.`);
  }
}
```

---

## Decorator Factories

Uma **Decorator Factory** (Fábrica de Decoradores) é uma função que retorna a expressão que será chamada pelo decorator em tempo de execução. Isso permite personalizar o comportamento do decorator passando argumentos.

#### Exemplo de Factory

```typescript
function Logger(prefix: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`[${prefix}] Executando o método...`);
      return originalMethod.apply(this, args);
    };
  };
}

class PaymentService {
  @Logger("SISTEMA-PAGAMENTO")
  processPayment(amount: number) {
    console.log(`Processando pagamento de R$ ${amount}`);
  }
}
```

---

## Ordem de Execução

Quando múltiplos decorators são aplicados a uma única declaração, a avaliação segue a seguinte lógica:

1. As expressões para cada decorator são avaliadas de **cima para baixo** (ou da esquerda para a direita).
2. Os resultados são então chamados como funções de **baixo para cima** (ou da direita para a esquerda).

```typescript
function First() {
  console.log("First: expression");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("First: evaluation");
  };
}

function Second() {
  console.log("Second: expression");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Second: evaluation");
  };
}

class Demo {
  @First()
  @Second()
  method() {}
}

// Saída no console:
// First: expression
// Second: expression
// Second: evaluation
// First: evaluation
```
