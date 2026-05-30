// Comando para compilar:
// npx tsc "src/49 - extends-package/index.ts" --outFile "dist/bundle.js" --target ES2021 --ignoreConfig --ignoreDeprecations 6.0
// npx tsc "src/49 - extends-package/index.ts" "src/49 - extends-package/my-declaration-file.d.ts" --outDir "dist" --target ES2021 --lib es2021 --ignoreConfig --ignoreDeprecations 6.0 --types node
import _ from './modulo.js';

const array = [100, 200, 300, 400];

// para global existe em tsconfg deve ter:
// "types": [ "node"],
console.log(global.MINHAGLOBAL);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));
