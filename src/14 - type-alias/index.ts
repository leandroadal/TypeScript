/**
 * Type Alias
 *
 * Permite criar um apelido para um tipo.
 * Facilita reutilização e organização dos tipos.
 */

type Name = string;

const user: Name = 'João';

console.log(user);

// Muito usado para objetos:
type Person = {
  name: Name;
  age: number;
};

const person: Person = {
  name: 'Maria',
  age: 30,
};
console.log('Person1: ' + person);

// Também funciona com funções:
type SumFn = (x: number, y: number) => number;

const sum: SumFn = (x, y) => x + y;
console.log(sum);

// Pode ser combinado com Union Types:
type Status = 'success' | 'error' | 'loading';

const response: Status = 'success';
console.log(response);

type RgbColor = 'Red' | 'Green' | 'Blue';
type CmykColor = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
// União dos dois
type PreferredColor = RgbColor | CmykColor;

type Person2 = {
  name: Name;
  age: number;
  salary: number;
  preferredColor?: string;
};
const person2: Person2 = {
  name: 'Teste',
  age: 20,
  salary: 200_000, // 200000
};

function setPreferredColor(person: Person2, color: PreferredColor): Person2 {
  // ... para não alterar o objeto original - shadow copy
  return { ...person, preferredColor: color };
}

console.log(setPreferredColor(person2, 'Blue'));
console.log(person2);
