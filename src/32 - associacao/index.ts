/**
 * Associação
 *
 * Ocorre quando uma classe utiliza outra classe.
 * É uma relação entre classes, mas sem dependência forte
 *
 * Características da associação:
 *
 * - objetos independentes
 * - relação fraca
 * - um objeto apenas utiliza outro
 */

class Pen {
  // escrever
  write() {
    console.log('Writing...');
  }
}

// A classe Autor usa Caneta, mas Caneta existe independentemente.
class Author {
  name: string;
  // ferramenta
  tool?: Pen;

  constructor(name: string) {
    this.name = name;
  }
}
const pen = new Pen();
const author = new Author('João');

author.tool = pen;
author.tool?.write();

// Relação:
// Autor -> usa -> Caneta
// Ambos podem existir separadamente.

// ================================
// Exemplo maior

// Escritor
export class Writer {
  // Ferramenta
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.tool.write();
  }
}

// Ferramenta
export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen2 extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

// Maquina de escrever
export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const writer = new Writer('Luiz');
const pen2 = new Pen2('Bic');
const typewriter = new Typewriter('Máquina');

console.log();
console.log(writer.name);
console.log(pen2.name);
console.log(typewriter.name);

writer.tool = pen2;
writer.write();
writer.tool = typewriter;
writer.write();
writer.tool = null;
writer.write();
