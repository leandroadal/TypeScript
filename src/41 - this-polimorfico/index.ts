/**
 * Polymorphic this (this polimórfico)
 *
 * O TypeScript entende que métodos retornando "this" devem retornar
 * a própria instância da classe atual
 *
 *
 */

class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

// Consegue fazer chamadas encadeadas
const calculadora = new SubCalculadora(10);
// add vai retornar o this(instancia) que vai usado na proxima função e assim sucessivamente
calculadora.add(5).mul(2).div(2).sub(5).pow(2);
// Como o numero foi calculado basta retorna-lo
console.log(calculadora.numero);
