/**
 * Type object
 *
 * Representa qualquer valor que seja um objeto
 * mas não conhece suas propriedades
 */

// Dessa forma, não há garantia de estrutura. Logo, não dá para acessar propriedades específicas com segurança
const pessoa: object = {
  nome: 'João',
  idade: 30,
};
// Property 'nome' does not exist on type 'object'
console.log(pessoa.nome);

const pessoaCorreta: {
  nome: string;
  idade: number;
} = {
  nome: 'João',
  idade: 30,
};

console.log(pessoaCorreta.nome);

const objectA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectA.chaveA = 'Outro valor';
// objectA.chaveC = 'Nova chave' // Depois de definido não pode mudar a configuração do objeto

const objectB: {
  chaveA: string;
  readonly chaveB: string; // Não pode alterar
  // chave opcional
  chaveC?: string;
  // Index signature - Agora é possível adicionar novas chaves
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectB.chaveA = 'Outro valor';
objectB.chaveC = 'Nova chave';
objectB.chaveD = 'Nova chave';

console.log(objectB.chaveD);
console.log(objectB.chaveF); // Como a chaveF não existe, retorna undefined
