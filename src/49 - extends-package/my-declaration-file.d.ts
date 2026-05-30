// Exemplo de extensão no loadsh
declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

// Exemplo de extensão no NodeJs
declare namespace NodeJS {
  interface Global {
    MINHAGLOBAL: string;
  }
}
