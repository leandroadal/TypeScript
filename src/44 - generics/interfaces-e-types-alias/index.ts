// Nome e sobrenome vão pegar o tipo que sera atribuído a T
// idade pega o tipo atribuído a U
// O valor padrão quando o tipo não é declarado para T é string e pra U number
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

// Aqui faz a mesma coisa que a interface de PessoaProtocolo
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

// Pode mudar o tipo dos dois atributos
const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(aluno1, aluno2, aluno3);
