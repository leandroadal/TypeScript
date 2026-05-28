/**
 * Classes
 *
 * Permitem criar objetos seguindo um modelo.
 *
 * Muito usadas em:
 * - orientação a objetos
 * - encapsulamento
 * - reutilização
 */

// Classe simples:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('John', 30);
console.log(person1.name);

// Modificadores de acesso:
//
// public    -> acessível de qualquer lugar
// private   -> acessível apenas dentro da classe
// protected -> acessível na classe e heranças

class Account {
  public holder: string;
  private balance: number;

  constructor(holder: string, balance: number) {
    this.holder = holder;
    this.balance = balance;
  }
}
const account = new Account('Ralf', 10000);
account.holder = 'Other';
console.log(account);

class Company {
  private readonly employees: Employee[] = [];
  constructor(
    public readonly name: string,
    protected readonly taxId: string,
  ) {}

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}

class Employee {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company = new Company('GitHub', '11.111.111/0001-11');
const employee1 = new Employee('Vanderson', 'Silva');
const employee2 = new Employee('Jairo', 'Rocha');
const employee3 = new Employee('Maria', 'Jose');

console.log(company.name);

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);
// structor type
company.addEmployee({
  name: 'test',
  lastName: 'test2',
});

console.log(company);
