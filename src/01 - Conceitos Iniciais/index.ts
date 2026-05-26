// Tipagem Estática
function multiply(x: number, y: number) {
  return x * y;
}

//const result = multiply(10, [5,1]); //erro de tipo
const result = multiply(10, 5);
console.log(result);

// interface
interface TemNome {
  name: String;
}

class Aluno implements TemNome {
  constructor(
    // modificadores de acesso
    public readonly name: string,
    private readonly idade: number,
  ) {}
}

// Classe abstrata
abstract class Animal {
  abstract makeNoise(): void;
}

class Dog extends Animal {
  constructor(private name: string) {
    super();
  }

  // Definição obrigatória
  makeNoise(): void {
    console.log(` ${this.name} is barking`);
  }
}

// Colocando tipo em uma variável
type CalculatorFn = (x: number, y: number) => number;

const add: CalculatorFn = (x, y) => x + y;
const sub: CalculatorFn = (x, y) => x - y;
const mul: CalculatorFn = (x, y) => x * y;
const div: CalculatorFn = (x, y) => x / y;

const twoPlusTwo = add(2, 2);
const twoTimesTwo = mul(2, 2);

// Definindo um tipo que pode adquirir um dos valores
type enume = 'a' | 'b' | 'c';

function testEnum(num: enume) {
  return 'success';
}
// Deve-se escolher entre a, b ou c. Ao clicar mostra as opções
testEnum('b');

// Quando possível irá inferir o tipo automaticamente
const pessoa = {
  nome: 'Teste',
  sobrenome: 'ze',
  idade: 40,
};
