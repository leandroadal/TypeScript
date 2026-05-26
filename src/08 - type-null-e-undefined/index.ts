/**
 * null      -> valor vazio definido intencionalmente
 * undefined -> valor ainda não definido
 */

// Define o nome como nulo inicialmente
let name: string | null = null;
console.log(name);
name = 'João';
console.log(name);

let age: number | null;
// Como ainda não foi definida retorna undefined
console.log(age);
age = 30;
console.log(age);

let text: string | undefined;
text = 'oi';
text = undefined;
console.log('text:' + text);

// Objetos
type User = {
  name: string;
  age?: number; // pode ser undefined
};

const user: User = {
  name: 'João',
};

console.log(user.age);

// Funções
function findUser(): string | null {
  // Gera um número aleatório entre 0 e 1
  const random = Math.random();

  // Se for maior que 0.5 retorna uma string
  if (random > 0.5) {
    return 'João';
  }

  // Caso contrário retorna null
  return null;
}

console.log('Buscar: ' + findUser());
console.log('Buscar: ' + findUser());

// Retorna number ou null
function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
const square = squareOf(2);

// estreitamento to tipo
if (square === null) {
  console.log('oi');
} else {
  // Como não é null então é number
  console.log(square * 100);
}
