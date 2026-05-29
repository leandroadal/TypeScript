//  Generics em Classes

// Recebe dois tipos genéricos
export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

// Recebe um tipo genérico
export class Pilha<T> {
  private contador = 0;
  // elementos que chaves do tipo number e valores do tipo T
  private elementos: { [k: number]: T } = {};

  // Insere um elemento no topo da pilha
  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  // Remove do topo
  // se estiver vazia retorna void/undefined se tiver item T
  pop(): T | void {
    if (this.estaVazia()) return undefined;

    // diminui o contador
    this.contador--;
    // guarda o elemento para retornar
    const elemento = this.elementos[this.contador];
    // apaga
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('string');

// enquanto a pilha não estiver vazia tire um item
while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}
