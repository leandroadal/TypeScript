/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Decorators
 *
 * São funções especiais usadas para modificar ou observar
 *
 * - classes
 * - métodos
 * - propriedades
 * - parâmetros
 */

// Quando a classe é criada, o decorator é executado.
function apiVersion(version: string) {
  return function (target: any) {
    target.version = version;
  };
}
// Decorators são funções.
// O @ apenas aplica a função em determinado alvo
@apiVersion('1.0')
class API {}

console.log((API as any).version);

// Tipos de decorators:
//
// @decorator
// -> classe
//
// método
// propriedade
// getter/setter
// parâmetro

type Constructor = new (...args: never[]) => {
  constructor: object;
};

function apiVersion2(version: string) {
  return function <T extends Constructor>(target: T): void {
    Object.defineProperty(target, 'version', {
      value: version,
      writable: false,
    });
  };
}

@apiVersion2('1.0')
class API2 {}
const api = new API2();
console.log((api.constructor as any).version); // Retorna "1.0"

// Decorator de método:
function enumerable(value: boolean) {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void {
    descriptor.enumerable = value;
  };
}

class Usuario {
  @enumerable(false)
  metodo(): void {}
}

const usuario = new Usuario();

// Obtém o protótipo da instância e extrai o descritor
const proto = Object.getPrototypeOf(usuario);
const descriptor = Object.getOwnPropertyDescriptor(proto, 'metodo');

if (descriptor) {
  console.log(descriptor.enumerable); // Retorna: false
}

// ===============================

@decorator
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}

// new (...args: any[]) => any    Representa o construtor de uma classe
// Então limita o T a ser uma classe
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
