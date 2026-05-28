/**
 * abstract
 *
 * Define classes e métodos que servem como modelo
 *
 * Classes abstratas NÃO podem ser instanciadas diretamente.
 */

// Classes filhas precisam implementar os métodos abstratos.
abstract class Person {
  abstract speak(): void;
}

class Client extends Person {
  speak() {
    console.log('Hello');
  }
}

const client = new Client();
client.speak();

// Método abstrato:
// Possui apenas definição, sem implementação.

abstract class Shape {
  abstract calculateArea(): number;
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

const square = new Square(10);
square.calculateArea();

// Classes abstratas também podem possuir métodos normais.
abstract class BaseAnimal {
  sleep() {
    console.log('Sleeping');
  }

  abstract makeSound(): void;
}

class Dog extends BaseAnimal {
  makeSound() {
    console.log('Woof woof');
  }
}
const dog = new Dog();
dog.sleep();
dog.makeSound();

// ==============================
// Exemplo maior
// Personagem não precisa ser instanciado pois serve como modelo pro personagem
export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected health: number,
  ) {}

  // Atacar
  attackTarget(character: Character): void {
    this.catchphrase();
    character.loseHealth(this.attack);
  }

  // Perder vida
  loseHealth(attackPower: number): void {
    this.health -= attackPower;
    console.log(
      `${this.emoji} - ${this.name} now has ${this.health} health left...`,
    );
  }

  abstract catchphrase(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  // bordão
  catchphrase(): void {
    console.log(this.emoji + ' GUERREIRAAAAAA AOOOOOO ATAAAQUEEE!!');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  // bordão
  catchphrase(): void {
    console.log(this.emoji + ' MONNNNNNNNNNNSSSTERRRRRRRRRRRRRR!!!!');
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 87, 1000);

warrior.attackTarget(monster);
warrior.attackTarget(monster);
warrior.attackTarget(monster);
monster.attackTarget(warrior);
monster.attackTarget(warrior);
monster.attackTarget(warrior);
