/**
 * NonNullable<T> - Remove null e undefined.
 * Parameters<T> - Obtém os parâmetros de uma função.
 * ReturnType<T> - Obtém o tipo de retorno de uma função.
 * Omit<T, K> - Remove propriedades do tipo.
 */

// NonNullable<T>
type Valor = string | null | undefined;

type ValorLimpo = NonNullable<Valor>;

const valorLimpo1: ValorLimpo = 'a';
// const valorLimpo2: ValorLimpo = null;
// const valorLimpo3: ValorLimpo = undefined;
console.log(valorLimpo1);

// Parameters<T>
function soma(a: number, b: number) {
  return a + b;
}
type Params = Parameters<typeof soma>;
soma(1, 2);
const params: Params = [1, 2];
console.log(params);

// ReturnType<T>
function obterNome() {
  return 'João';
}
type Nome = ReturnType<typeof obterNome>;
const nome: Nome = 'nome';
console.log(nome);
obterNome();

// Omit<T, K>
type Pessoa = {
  nome: string;
  idade: number;
  email: string;
};
type PessoaSemEmail = Omit<Pessoa, 'email'>;
const pessoaSemEmail: PessoaSemEmail = {
  nome: '',
  idade: 20,
};
console.log(pessoaSemEmail);
