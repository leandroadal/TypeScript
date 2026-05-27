/**
 * Type Assertion
 *
 * Permite informar ao TypeScript qual é o tipo de um valor.
 * Muito usado quando o desenvolvedor sabe mais sobre o tipo do que o TypeScript.
 */

const input = document.querySelector('.input') as HTMLInputElement;

console.log(input.value);

// Sem Type Assertion:

// O TypeScript entende apenas que pode ser: Element | null
const elemento = document.querySelector('.btn');
// console.log(elemento.value); // !Erro

// TypeScript aceita,
// mas continua sendo string em runtime
const valor = '10' as unknown as number;
// console.log(valor); // !Erro

/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input2 = document.querySelector('.input') as HTMLInputElement;
input2.value = 'Qualquer coisa';
input2.focus();

/* Não Recomendado */
// Type assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
