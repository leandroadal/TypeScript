/**
 * Public
 *
 * Pode ser acessado de qualquer lugar. É o padrão das propriedades e métodos.
 *
 * Private
 *
 * Só pode ser acessado dentro da própria classe.
 */

class Person {
  public name: string;
  // Mesmo sem escrever "public"  o TypeScript assume public
  lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

const person = new Person('João', 'Silva');

console.log(person.name);

// Private
class Account {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  showBalance() {
    console.log(this.balance);
  }
}

const account = new Account(1000);
// console.log(conta.saldo); // ! erro o saldo não é acessível

// Evita alterações indevidas
// conta.saldo = 100000000000;
account.showBalance();
