/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Parameter Decorator
 *
 * Decorator aplicado em parâmetros de métodos.
 *
 * Permite observar metadados do parâmetro decorado.
 * decoradores de parâmetro não devem retornar nenhum valor
 */

// Recebe:
//
// target
// propertyKey
// parameterIndex

function paramDecorator(
  target: object,
  propertyKey: string | symbol,
  parameterIndex: number,
): void {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

class Pessoa {
  falar(@paramDecorator mensagem: string): void {
    console.log(mensagem);
  }
}

const pessoa = new Pessoa();
pessoa.falar('mensagem');

//

function decorador(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
  //return 'qualquer coisa'; // !decorador em parameter não pode retornar
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa2 = new UmaPessoa('Luiz', 'Otávio', 30);
const metodo = pessoa2.metodo('Olá mundo!');
console.log(metodo);
