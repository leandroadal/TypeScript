// Declaration merging
interface Person {
  name: string;
}

interface Person {
  readonly lastName: string;
  readonly addresses: readonly string[];
  age?: number;
}

const person: Person = {
  name: 'Luiz',
  lastName: 'Miranda',
  addresses: ['Av. Brasil'],
  age: 30,
};

person.age = 31;
console.log(person);
