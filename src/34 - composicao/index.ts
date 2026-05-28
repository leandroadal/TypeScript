/**
 * Composição
 *
 * Relação forte entre objetos onde **um objeto** depende do outro para existir.
 * Ha instanciação do outro dentro da classe
 */

// Diferença:
//
// Associação
// -> apenas usa outro objeto
//
// Agregação
// -> possui outro objeto
//
// Composição
// -> depende totalmente do objeto pai

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parado...');
  }

  desligar(): void {
    console.log('Motor está desligado...');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();

// Outro exemplo

class Comodo {
  constructor(public nome: string) {}
}

// Casa cria e controla os cômodos.

class Casa {
  private comodos: Comodo[] = [];

  adicionarComodo(nome: string) {
    const comodo = new Comodo(nome);

    this.comodos.push(comodo);
  }

  listarComodos() {
    console.log(this.comodos);
  }
}

const casa = new Casa();

casa.adicionarComodo('Quarto');
casa.adicionarComodo('Cozinha');

casa.listarComodos();
