/**
 * Structural Type System
 *
 * O TypeScript verifica os tipos pela estrutura,
 * e não pelo nome do tipo.
 * Se dois objetos possuem as mesmas propriedades,
 * eles são considerados compatíveis.
 */

type Person = { name: string };
type User = { name: string };

const person: Person = { name: 'João' };
const user: User = person; // ja que os atributos tem o mesmo tipos
console.log(user, person);

// Função
// * Mesmo se o nome do parâmetro for diferente o que importa é o tipo
type Sum1 = (x: number, y: number) => number;
type Sum2 = (a: number, b: number) => number;

const sum: Sum1 = (x, y) => x + y;

const anotherFunction: Sum2 = sum;
console.log(sum, anotherFunction);

// Outro exemplo
type VerifyUserFn = (user: AppUser, sentValue: AppUser) => boolean;
type AppUser = { username: string; password: string };

// os atibutos user e sentValue devem ser User de acordo com o que foi defino em VerifyUserFn
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permissions: '' }; // Mesmo tendo um atributo a mais passa pela verificação de tipo
const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn);

// Reforçando

// Objetos podem ser aceitos mesmo
// não pertencendo ao "tipo original".

type Animal = {
  name: string;
};

const dog = {
  name: 'Rex',
  age: 5,
};

// Funciona mesmo possuindo propriedades extras
const animal: Animal = dog;
console.log(animal);
