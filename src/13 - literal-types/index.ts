/* eslint-disable prefer-const */
/**
 * Literal Types
 *
 * Permitem definir valores exatos que uma variável pode possuir.
 */

const x = 10; // const define o valor literal de x para 10 então não pode ser alterado
let a: 100 = 100; // mesma coisa que o const
//a = 120; // 120' não pode ser atribuído ao tipo '100'
let b = 100 as const;
console.log(x, a, b);

let status: 'success';

status = 'success';

// status = 'error';
// !Erro: apenas "success" é permitido
console.log(status);

// Muito usado para limitar opções válidas.

let theme: 'dark' | 'light';

theme = 'dark';
theme = 'light';

function changeTheme(theme: 'dark' | 'light') {
  console.log(theme);
}

// alterarTema('drak');
// ! Erro de escrita
changeTheme('dark');

// Literal Types são frequentemente usados
// junto com Union Types.

type Status = 'pending' | 'success' | 'error';

const response: Status = 'success';

console.log(response);

const person = {
  firstName: 'Luiz' as const,
  lastName: 'Ferdinando',
};
person.firstName = 'Luiz'; // o nome do pode ser esse
person.lastName = 'outroo';
