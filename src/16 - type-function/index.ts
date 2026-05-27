/**
 * Type Function
 *
 * Permite definir o tipo de uma função,
 * incluindo parâmetros e retorno.
 */

type SumFn = (x: number, y: number) => number;

const sum: SumFn = (x, y) => {
  return x + y;
};

console.log(sum(3, 2));

// Receber um parâmetro do tipo string (chamado item).
// Retornar obrigatoriamente um valor do tipo string
type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  /* Pode dar undefined
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  */

  /* Pois
  const arr: string[] = ['banana', , 'maçã']; // O segundo elemento está vazio
  console.log(arr.length); // Imprime: 3
  console.log(arr[1])
  */

  for (const item of array) {
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

// (item) => item.toUpperCase() como segundo argumento (o callback) pega cada string
//  e a transforma em maiúscula
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
