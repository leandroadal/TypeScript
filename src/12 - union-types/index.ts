/**
 * Union types
 *
 * Permitem que uma variável aceite mais de um tipo de valor.
 */

let valor: string | number;

valor = 'João';
valor = 10;

console.log(valor);

function exibirId(id: string | number) {
  console.log(id);
}

exibirId(10);
exibirId('abc123');

/*
function imprimir(valor: string | number) {
   valor.toUpperCase();
   * Erro: number não possui toUpperCase
}
*/

// Verificar o tipo antes de usar.
function imprimir2(valor: string | number) {
  if (typeof valor === 'string') {
    console.log(valor.toUpperCase());
  }

  if (typeof valor === 'number') {
    console.log(valor.toFixed(2));
  }
}

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // Com o if abaixo ainda ha a possibilidade de retorna undefined se vir uma string e um number não ia cair em nenhum
  // return e por padrão seria retornado undefined
  //if (typeof a === 'string' && typeof b === 'string') return a + b;

  //solução não usar o +
  return `${a}${b}`;
}

console.log(addOrConcat(0, 'b'));
console.log(addOrConcat(0, 10));
