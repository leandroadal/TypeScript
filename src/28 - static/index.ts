/**
 * static
 *
 * Pertence à classe, e não aos objetos criados
 * Pode ser acessado sem usar new
 */

class Mathematics {
  static PI = 3.14;

  static sum(x: number, y: number) {
    return x + y;
  }
}
console.log(Mathematics.PI);

console.log(Mathematics.sum(10, 5));

// Objetos NÃO possuem acesso direto aos membros static.

class User {
  static role = 'ADMIN';
}

const user = new User();
// console.log(user.cargo); // !Erro
console.log(user);

// ===============================
// Exemplo maior

// pode usar public, private e protected também
export class Person {
  static defaultAge = 0;
  static defaultTaxId = '000.000.000-00';

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public taxId: string,
  ) {}

  normalMethod(): void {
    console.log(Person.defaultAge, Person.defaultTaxId);
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.defaultAge, Person.defaultTaxId);
  }
}

const person1 = new Person('Luiz', 'Miranda', 30, '123.456.798-00');
const person2 = Person.createPerson('Maria', 'Miranda');
console.log(person1);
console.log(person2);
person1.normalMethod();
console.log(Person.defaultAge, Person.defaultTaxId);
