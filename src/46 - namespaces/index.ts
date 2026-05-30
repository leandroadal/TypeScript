/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />

//* Não funciona com o '"module": "nodenext", deve ser and ou system
// com verbatimModuleSyntax "true", deve ser false
// e "moduleDetection": "force", deve ser comentado
// e "isolatedModules": true, deve ser false
//! amd e system foram preteridas e vão deixar de funcionar no typescript 7
// para usa-las adicionar a configuração '"ignoreDeprecations": "6.0"' para silenciar esse erro

// Melhor usar o comando pra compilar e depois rodar manualmente com o node
// npx tsc "src/46 - namespaces/index.ts" --outFile "dist/bundle.js" --target ES2021 --ignoreConfig --ignoreDeprecations 6.0

//console.log(MeuNamespace.nomeDoNamespace);
//console.log(constDoNamespace);
