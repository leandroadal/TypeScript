/**
 * Type tuple
 *
 * Permite definir um array com quantidade fixa e de elementos e tipos específicos em cada posição.
 */

const student: [string, number] = ['João', 20];

// Cada posição possui um tipo definido:
const person: [string, string, number] = ['João', 'Silva', 30];

console.log(student);
console.log(person);

const customerData: [number, string] = [1, 'Luiz'];
// Quiser que seja imutável
const customerData2: readonly [number, string, string?] = [1, 'Luiz'];
// Deve number -> string -> quanta strings quiser
const customerData3: [number, string, ...string[]] = [1, 'Luiz', 'r', 'f', 'g'];

customerData[0] = 100;
customerData[1] = 'oi';

console.log(customerData, customerData2, customerData3);
customerData3.pop(); // remove o ultimo item da tupla
console.log(customerData3);
