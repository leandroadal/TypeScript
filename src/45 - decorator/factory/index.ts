/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Decorator Factory
 *
 * É uma função que retorna um decorator.
 * Permite configurar decorators com parâmetros.
 */

// Muito usado quando:
//
// O decorator precisa:
//
// - configurações
// - opções
// - parâmetros dinâmicos

type Constructor1 = new (...args: any[]) => object;

// id é o number que vem no decorator
function adicionarId(id: number) {
  // target a classe
  return function <T extends Constructor1>(target: T) {
    return class extends target {
      id = id;

      constructor(...args: any[]) {
        super(...args);
      }
    };
  };
}

@adicionarId(10)
class Usuario {}

@adicionarId(1)
class Usuario2 {
  constructor(public nome?: string) {} // para mostrar que a classe pode estar vazia se quiser
}

const user = new Usuario();
const user2 = new Usuario2('João');
console.log(user, user2);

// ==================================
// Aprimorando o exemplo do ../class/index.ts

// Coloca o construtor em uma interface
interface Constructor2 {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor2) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@inverteNomeECor('Outra coisa', 'Valor2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
