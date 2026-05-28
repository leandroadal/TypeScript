/**
 * super()
 *
 * Usado dentro de classes filhas para acessar a classe pai.
 */
// extends -> cria herança
// super() -> chama a classe pai

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

const student = new Student('João', 'TypeScript');
console.log(student);

// super também pode acessar métodos da classe pai.
class BasePerson {
  speak() {
    console.log('Hello');
  }
}

class Client extends BasePerson {
  speak() {
    super.speak();

    console.log('Welcome');
  }
}

const client = new Client();

client.speak();

// Exemplo longo
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
  constructor(
    name: string,
    lastName: string,
    age: number,
    taxId: string,
    public classroom: string,
  ) {
    super(name, lastName, age, taxId);
  }

  getFullName(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getFullName();
    return result + ' HEYYYYYYYY!!';
  }
}
export class Client2 extends Person2 {
  getFullName(): string {
    return 'Isso vem do cliente: ' + this.name + ' ' + this.lastName;
  }
}

const person = new Person2('Luiz', 'Miranda', 30, '000.000.000-00');
const student2 = new Student2('Luiz', 'Miranda', 30, '000.000.000-00', '0001');
const client2 = new Client2('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(person.getFullName());
console.log(student2.getFullName());
console.log(client2.getFullName());
console.log(student);
