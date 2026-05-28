/**
 * Protected
 *
 * Permite acesso:
 * - dentro da própria classe
 * - nas classes filhas
 *
 * Mas NÃO fora da classe.
 */

// Diferença:
//
// public
// -> acesso livre
//
// private
// -> apenas dentro da própria classe
//
// protected
// -> classe + heranças

class Account {
  protected balance = 1000;

  showBalance() {
    console.log(this.balance);
  }
}

class PremiumAccount extends Account {
  displayBalance() {
    console.log(this.balance);
  }
}
const account = new PremiumAccount();

account.displayBalance();
// console.log(conta.saldo); //! erro

// ===================================
// Exemplo maior

export class Employee {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

export class Company {
  readonly name: string;
  protected readonly employees: Employee[] = [];
  private readonly taxId: string;

  constructor(name: string, taxId: string) {
    this.name = name;
    this.taxId = taxId;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  // Consegue acessar os colaboradores pelo protected
  popEmployee(): Employee | null {
    const employee = this.employees.pop();
    if (employee) return employee;
    return null;
  }
}

const company1 = new Udemy();
const employee1 = new Employee('Luiz', 'Otávio');
const employee2 = new Employee('Maria', 'Miranda');
const employee3 = new Employee('João', 'Vieira');
company1.addEmployee(employee1);
company1.addEmployee(employee2);
company1.addEmployee(employee3);
const removedEmployee = company1.popEmployee();
console.log(removedEmployee);
console.log(company1);
