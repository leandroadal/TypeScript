/**
 * Type never
 *
 * Representa valores que nunca acontecem.
 *
 * Geralmente usado em funções que:
 * - lançam erro
 * - entram em loop infinito
 * - nunca retornam valor
 */

// Diferença entre void e never:
//
// void  -> a função termina sem retornar valor
// never -> a função nunca termina normalmente

function geraErro(): never {
  throw new Error('Algo deu errado');
}

function loopInfinito(): never {
  while (true) {}
}

// loopInfinito(); // caso não tivesse comentando o geraError nunca ir rodar por causa do loop infinito
geraErro();
loopInfinito(); // código inacessível pois o erro para a execução do programa
