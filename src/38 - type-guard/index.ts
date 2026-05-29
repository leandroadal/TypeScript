/**
 * Type Guard
 *
 * Técnica usada para verificar e restringir tipos em tempo de execução.
 *
 * Ajuda o TypeScript a descobrir qual tipo está sendo usado
 * "estreitamento de tipo"
 */

export function add(a: unknown, b: unknown): number | string {
  // Restringi a saída da função a number e string
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = {
  tipo: 'pessoa'; // type literal
  nome: string;
};
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  tipo: 'pessoa' = 'pessoa';
  // ou
  // tipo: 'pessoa' as const;
  constructor(public nome: string) {}
}

export function mostraNome(obj: PessoaOuAnimal): void {
  // O operador in verifica se uma propriedade existe no objeto em tempo de execução
  // Se 'nome' in obj for verdadeiro, o TypeScript reconhece que obj só pode ser do
  // tipo Pessoa (já que Animal não possui a propriedade nome)
  if ('nome' in obj) console.log('in ' + obj.nome);

  // O operador instanceof verifica se o objeto foi criado a partir de uma classe específica (neste caso, Aluno)
  if (obj instanceof Aluno) console.log('instance of ' + obj.nome);

  switch (obj.tipo) {
    case 'pessoa':
      console.log('switch ' + obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}
// Pessoa
mostraNome(new Aluno('João'));

// animal
mostraNome({ tipo: 'animal', cor: 'rosa' });
