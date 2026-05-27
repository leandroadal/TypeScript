/**
 * Intersection Types
 *
 * Permitem combinar múltiplos tipos em um só.
 * Usa o operador &
 */
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
type Address = { city: string };
type User = Person & Address;

const user: User = {
  name: 'Maria',
  age: 25,
  city: 'São Paulo',
};

console.log(user);

// Interseção

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type DA = 'D' | 'A';
type Intersection = AB & AC & DA; // Resulta em A

const inter: Intersection = 'A';
//const inter2: Intersection = 'B'; // ! Erro na compilação
console.log(inter);
