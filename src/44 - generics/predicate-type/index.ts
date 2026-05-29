// value is number (Predicado de Tipo)

// Se retorna um boolean o compilador não vai entender que é um number então é necessário o predicado
// value is number diz que o valor enviado é do tipo number
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      // funcionaria com o typeof aq no if
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
//console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1])); // !erro ...args: number[]
console.log(soma('a', 'b', 'c'));
