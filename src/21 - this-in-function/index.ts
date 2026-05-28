/**
 * this em functions
 *
 * O valor de "this" depende de como a função foi chamada
 */

// Exemplo simples:

function mostrarThis() {
  //console.log(this); //! undefined
}

mostrarThis();

// Em objetos, "this" referencia
// o próprio objeto.
const pessoa = {
  nome: 'João',

  falar() {
    console.log(this.nome);
  },
};

pessoa.falar();

// Problema:
// Ao perder o contexto, o "this" pode mudar.

const usuario = {
  nome: 'Maria',

  saudacao() {
    console.log(this.nome);
  },
};

const funcao = usuario.saudacao;
console.log(funcao);

//funcao();
// "this" deixa de apontar para usuário

// Solução com bind():
const funcaoBind = usuario.saudacao.bind(usuario);
funcaoBind();

/**
 *
 * @param this quando essa função for executada, o contexto do this dentro dela deve ser obrigatoriamente um objeto do tipo Date
 * @param nome parâmetro real
 * @param age parâmetro real
 */
export function funcao2(this: Date, nome: string, age: number): void {
  // o TypeScript sabe que this possui os métodos e propriedades de um objeto Date (como .getTime() ou .getFullYear())
  console.log(this.getDate(), this.getFullYear());
  console.log(nome, age);
}

// chamar funcao2('Luiz', 30) da erro pois o contexto do this não é do tipo void
// funcao2(new Date(), 'Luiz', 30); erro pois esperava 2 argumentos
// call(): É um método que executa a função imediatamente, permitindo que você defina manualmente o que será o this (dentro do tipo date).
funcao2.call(new Date(), 'Luiz', 30);
// apply(): Funciona de forma semelhante ao call(), executando a função imediatamente e definindo o contexto do this
funcao2.apply(new Date(), ['Luiz', 30]);

// Arrow functions NÃO possuem seu próprio "this".
// Elas usam o "this" do escopo externo.
const objeto = {
  nome: 'Carlos',

  normal() {
    console.log(this.nome);
  },

  arrow: () => {
    // "this" não referencia o objeto então this.nome aqui da erro
    console.log(this);
  },
};

objeto.normal();
objeto.arrow(); //! undefined
