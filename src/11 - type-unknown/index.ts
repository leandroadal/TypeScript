/**
 * Type unknown
 *
 * Representa um valor de tipo desconhecido.
 * É mais seguro que "any", pois obriga verificação antes do uso.
 */

let value: unknown;

value = 10;
value = 'João';
value = true;

console.log(value);

// Não é possível usar o valor diretamente.

const data: unknown = 'Teste';
//console.log(data.toUpperCase()); // da erro ao compilar

if (typeof data === 'string') {
  console.log(data.toUpperCase()); // compila normalmente
}
