/**
 * Operador ?? (Nullish Coalescing)
 *
 * Retorna o valor da direita apenas se o valor da esquerda for:
 * null ou undefined
 */

// Muito usado para:
//
// - valores padrão
// - configurações
// - respostas de API

const nome = null;

const valorFinal = nome ?? 'Usuário padrão';

console.log(valorFinal);

// ==============================

function saudacao(nome?: string) {
  const nomeFinal = nome ?? 'Visitante';

  console.log(nomeFinal);
}

saudacao();
// ===============================

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

// documento.data? - so executa a função .toDateString() se o data existir
console.log(documento.data?.toDateString() ?? '1-Ixi, não existe data.');
// console.log(undefined ?? '2-Ixi, não existe data.'); // * Exibe a string
// console.log(null ?? '3-Ixi, não existe data.'); // * Exibe a string
// console.log(false ?? '4-Ixi, não existe data.'); // * Não Exibe a string
// console.log(0 ?? '5-Ixi, não existe data.'); // * Não Exibe a string
// console.log('' ?? '6-Ixi, não existe data.'); // * Não Exibe a string
