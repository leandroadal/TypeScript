/**
 * Indexed Access Types
 *
 * Acessa o tipo de uma propriedade
 * da mesma forma que acessaria valores em objetos JavaScript.
 */

type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca']; // string
  year: Veiculo['ano']; // number
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Nome',
};

console.log(carro);

// Também funciona com unions:
type Pessoa = {
  nome: string;
  idade: number;
};

type Valores = Pessoa['nome' | 'idade'];
// Resultado:
// type Valores = string | number
const test: Valores = 'oi';
const test2: Valores = 10;

console.log(test, test2);
