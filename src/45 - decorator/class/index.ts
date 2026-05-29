/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Class Decorator
 *
 * Decorator aplicado diretamente em uma classe.
 *
 * Recebe o constructor da classe como argumento.
 */

// <T extends new (...args: any[]) => any>: diz que o tipo T deve ser uma classe
// (target: T): T - recebe a classe original como parâmetro (target) e deve retornar uma classe que mantenha a mesma estrutura (tipo T).
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  // O log aparece quando a classe é criada não na instanciação
  console.log('Sou o decorador e recebi', target);

  // Herda de T
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args); // Executa o construtor da classe original (Animal)
      this.nome = this.inverte(args[0]); // Inverte o primeiro argumento
      this.cor = this.inverte(args[1]);
    }

    // Função que inverte
    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  // O construtor que fica ativo é o do decorator
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

// O decorator inverte os nomes enviados no construtor
const animal = new Animal('Luiz', 'roxo');
console.log(animal);
