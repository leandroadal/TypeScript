type MeuTipo = number;

// Array é genérico então precisa declarar o tipo
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

// Promise também é genérico então precisa ter o tipo
// definido em uma declaração de tipo
export function minhaPromise(): Promise<MeuTipo | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
