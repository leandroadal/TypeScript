/**
 * Interface
 *
 * Definem um contrato (estrutura) que um objeto deve seguir.
 * Não possuem implementação, apenas definição de tipos.
 */

interface TypeName {
  name: string;
}

interface TypeLastName {
  lastName: string;
}

interface TypeFullName {
  fullName(): string;
}
// Interfaces podem ser estendidas:

// forma de type
type TypePerson = TypeName & TypeLastName & TypeFullName;
const typePerson: TypePerson = {
  name: '',
  lastName: '',
  fullName() {
    return 'tipo pessoa';
  },
};
console.log(typePerson);

// fazendo em forma de interface
interface TypePerson2 extends TypeName, TypeLastName, TypeFullName {}

export class Person implements TypePerson2 {
  constructor(
    public name: string,
    public lastName: string,
  ) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const personObj: TypePerson2 = {
  fullName() {
    return this.name + ' ' + this.lastName;
  },
  name: 'Luiz',
  lastName: 'Agora tá ok',
};

const person = new Person('Luiz', 'Miranda');
console.log(person.fullName());
console.log(personObj.fullName());
