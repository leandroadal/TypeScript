/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Composição de Decorators
 *
 * Ocorre quando múltiplos decorators são aplicados no mesmo alvo.
 * - Os decorators são executados de baixo para cima.
 */

type Constructor1 = new (...args: any[]) => object;

function decorator1(_target: Constructor1): void {
  console.log('Decorator 1');
}

function decorator2(_target: Constructor1): void {
  console.log('Decorator 2');
}

@decorator1
@decorator2
class Pessoa {}
const pesssoa = new Pessoa();
console.log(pesssoa);

// ==================================
// Usando composição no exemplo de ../factory/index.ts

interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
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

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador ' + param1);
    return target;
  };
}

@outroDecorador('O parâmetro do outro decorador') // 2
@inverteNomeECor('Outra coisa', 'Valor2') // 1
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
