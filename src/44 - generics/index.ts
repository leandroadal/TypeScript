// O que esta dentro de <> pode ser qualquer letra usa U e T por convenção

// T de type - geralmente o primeiro genérico
// U - proxima letra do alfabeto

// Quando o U for definido na chamada da (ao definir o primeiro valor com tipo U)
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// Como dito acima a letra é irrelevante so funciona dentro do espoco
// Então o tipo que for atribuído a um T sera atribuído a todos os outros
// Dessa forma, como o callbackfn é do tipo FilterCallback<T> então se T for number tudo com U no type acima vai ser number
export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray: T[] = [];

  array.forEach((item, i) => {
    if (callbackfn(item, i, array)) {
      novoArray.push(item);
    }
  });

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
