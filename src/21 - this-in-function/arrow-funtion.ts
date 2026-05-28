/**
 * Arrow functions
 *
 * NÃO criam seu próprio "this". Elas capturam o "this" do local onde foram criadas.
 * Isso é chamado de lexical this
 */

// Arrow function:
// Ela NÃO usa o objeto como "this".

const usuario = {
  nome: 'Maria',

  falar: () => {
    console.log(this);
  },
};

usuario.falar();

// Nesse caso:
// O "this" da arrow function foi herdado do escopo externo.
//
// Em módulos do Node.js, normalmente será:
// undefined
//
// ou o objeto global dependendo do ambiente.
// Problema comum:
// Tentativa de acessar propriedades do objeto.

const cachorro = {
  nome: 'Rex',

  latir: () => {
    // console.log(this.nome); // ! da erro
  },
};

console.log(cachorro.nome);

// Onde arrow functions brilham:
// Callbacks e funções internas, pois mantêm o "this" externo.

class Controle {
  nome = 'Controle';

  iniciar() {
    setTimeout(() => {
      // Arrow function herda
      // o this da classe
      console.log(this.nome);
    }, 1000);
  }
}

const controle = new Controle();

controle.iniciar();
// Sem arrow function:

class Teste {
  nome = 'Teste';

  iniciar() {
    setTimeout(function () {
      // "this" muda aqui
      // console.log(this.nome);
    }, 1000);
  }
}

const teste = new Teste();
teste.iniciar(); // não tem acesso ao nome
