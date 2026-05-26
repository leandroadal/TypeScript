/**
 * Type annotation
 *
 * É quando definimos explicitamente o tipo de uma variável, parâmetro, função ou objeto no TypeScript.
 */

// Tipos básicos
const name: string = 'João';
const age: number = 30; // 10, 1.10, -50, -6.0
const adult: boolean = true;
const symbols: symbol = Symbol('qualquer-symbol');
const big: bigint = 10n;

console.log(name, age, adult, symbols, big);

// Arrays
const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfNumbers2: number[] = [1, 2, 3];

const arrayOfStrings: Array<string> = ['a', 'b'];
const arrayOfStrings2: string[] = ['a', 'b'];

console.log(arrayOfNumbers);
console.log(arrayOfNumbers2);
console.log(arrayOfStrings);
console.log(arrayOfStrings2);

// Objetos

const people: { name: string; age: number; adult?: boolean } = {
  age: 30,
  name: 'Leandro',
}; //adult é opcional

console.log(people.name);

// Funções

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 2));

const sum2: (a: number, b: number) => number = (a, b) => a + b;
console.log(sum2(2, 2));
