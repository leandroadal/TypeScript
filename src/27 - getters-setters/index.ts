/**
 * Getter e Setter
 *
 * Permitem controlar leitura e alteração de propriedades.
 */

class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const person = new Person('João');

console.log(person.name);

person.name = 'Maria';

console.log(person.name);

/*
class Pessoa2 {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // * o get e o set não pode ter o mesmo nome que o atributo.
  get nome() { // atributo duplicado
    return this.nome;
  }
}
*/

export class Person2 {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _taxId: string,
  ) {
    this.taxId = _taxId; // Se quiser que no construtor também tenha validação
  }

  set taxId(taxId: string) {
    console.log('SETTER CHAMADO');
    this._taxId = taxId;
  }

  get taxId(): string {
    console.log('GETTER CHAMADO');
    return this._taxId.replace(/\D/g, '');
  }
}

const person2 = new Person2('Luiz', 'Miranda', 30, '123.456.798-00');
person2.taxId = '123.456.798-99';
console.log(person2.taxId);
