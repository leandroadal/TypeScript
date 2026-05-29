/**
 * Function Overload
 *
 * Permite criar múltiplas assinaturas para a mesma função
 *
 * A implementação continua sendo única
 */

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) {
    // args.reduce para somar os args
    // Se y for um valor considerado "verdadeiro" (truthy), a expressão retorna o
    // próprio y. Se y for "falso" (falsy) retorna 0
    return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  }
  //se não tiver args
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
