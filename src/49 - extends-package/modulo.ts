import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

// precisa usar uma versão antiga do "@types/node" pois
// nas novas a interface NodeJS.Global foi descontinuada
// O objeto global do Node agora é tipado como sendo do tipo typeof globalThis
global.MINHAGLOBAL = 'VALOR DA GLOBAL';

export default _;
