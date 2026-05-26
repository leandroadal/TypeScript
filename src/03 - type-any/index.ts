/**
 * Type any
 *
 * Permite que uma variável aceite qualquer tipo de valor.
 * Evita erros de tipagem, mas reduz a segurança do TypeScript.
 */

let valor: any = 10;

valor = 'texto';
valor = true;
valor = { nome: 'João' };
console.log(valor);

// any implícito
// Para impedir de compilar com any implícito deveria colocar "noImplicitReturns": true, no tsconfig.json
function showMessage(msg) {
  return msg;
}
console.log(showMessage(2));
console.log(showMessage('oi'));
