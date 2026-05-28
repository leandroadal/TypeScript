/**
 * Agregação
 *
 * Relação entre objetos onde um objeto possui outro, mas ambos podem existir separadamente.
 *
 * É um tipo de associação
 */
// Características da agregação:
//
// - relação "tem um"
// - objetos independentes
// - ciclo de vida separado

class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

// Carrinho agrega produtos.
class Carrinho {
  produtos: Produto[] = [];

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

// Os produtos existem independentemente do carrinho.
// Mesmo removendo o carrinho, os produtos continuam existindo.
const produto1 = new Produto('Notebook', 1000);
const produto2 = new Produto('Mouse', 30);

const carrinho = new Carrinho();

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

const produto3 = new Produto('Camiseta', 49.9);
const produto4 = new Produto('Caneca', 1.9);
const produto5 = new Produto('Caneta', 0.9);

carrinho.inserirProdutos(produto3, produto4, produto5);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidadeProdutos());
