/**
 * Type void
 *
 * Usado em funções que não retornam nenhum valor.
 */

function mensagem(texto: string): void {
  console.log(texto);
}
mensagem('Hello World!');

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
semRetorno('Olá', 'Mundo!');

const person = {
  name: 'Leandro',
  surname: 'Silva',

  exibirNome(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

person.exibirNome();

export { person };
