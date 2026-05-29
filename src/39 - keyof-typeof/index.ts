/**
 * typeof - Obtém o tipo de uma variável ou objeto existente.
 *
 * keyof - Obtém as chaves de um tipo como Union Type.
 */

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(
  cor: 'vermelho' | 'verde' | 'azul',
  cores: typeof coresObj, // pega os tipos
) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));

// Usando typeof e keyof da pra mudar a chaves e tipos sem quebrar a função

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

function traduzirCor2(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor2('vermelho', coresObj));
console.log(traduzirCor2('verde', coresObj));
