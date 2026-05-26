/**
 * Type Array
 *
 * Usado para definir o tipo dos valores dentro de um array.
 */

// Array de números
const numbers: number[] = [1, 2, 3];

// Outra forma de tipar arrays
const names: Array<string> = ['João', 'Maria', 'José'];

// Array com múltiplos tipos:
const mix: (string | number)[] = ['João', 10, 'Maria'];

// Adiciona a lista
numbers.push(2, 3, 1, 0);
// Remove o ultimo elemento
numbers.pop();
console.log(numbers, names, mix);

// Tornar a lista imutável
const array1: readonly string[] = ['Luiz', 'Roberto'];
const array2: ReadonlyArray<string> = ['Luiz', 'Roberto'];

console.log(array1, array2);

// Em funções
function multiply(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value);
}

function join(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

// Se o retorno for um array deve ser declarado de acordo
function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiply(10, 20, 30);
const resultJoin = join('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(resultJoin);
console.log(upper);
