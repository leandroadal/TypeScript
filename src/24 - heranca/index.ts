/**
 * Herança
 *
 * Permite que uma classe reutilize características de outra.
 * Usa a palavra extends
 */
// extends -> cria herança
// super() -> chama a classe pai

class Animal {
  sleep() {
    console.log('Sleeping');
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof woof');
  }
}

const dog = new Dog();

dog.sleep(); // herdado
dog.bark();

class Person {
  constructor(public name: string) {}
}

class Student extends Person {
  constructor(
    name: string,
    public course: string,
  ) {
    super(name);
  }
}

const student = new Student('John', 'TypeScript');
console.log(student);

// Sobrescrevendo métodos:
class BaseAnimal {
  makeSound() {
    console.log('Generic sound');
  }
}

class Cat extends BaseAnimal {
  makeSound() {
    console.log('Meow');
  }
}

const cat = new Cat();
cat.makeSound();

// Exemplo 2
export class Person2 {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected taxId: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getTaxId(): string {
    return this.taxId;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student2 extends Person2 {
  getFullName(): string {
    return 'This comes from the student: ' + this.name + ' ' + this.lastName;
  }
}
export class Client extends Person2 {
  getFullName(): string {
    return 'This comes from the client: ' + this.name + ' ' + this.lastName;
  }
}

const person = new Person2('Luiz', 'Miranda', 30, '000.000.000-00');
const student2 = new Student2('Luiz', 'Miranda', 30, '000.000.000-00');
const client = new Client('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(person.getFullName());
console.log(student2.getFullName());
console.log(client.getFullName());
