/**
 * Dependency Inversion (Inversão de Dependência)
 *
 * Classes não devem depender de implementações concretas.
 * Devem depender de abstrações.
 */

// A classe depende diretamente de uma implementação concreta.
class LightBulb {
  turnOn() {
    console.log('Lâmpada ligada');
  }
}

class Switch {
  constructor(private lightBulb: LightBulb) {}

  turnOn() {
    this.lightBulb.turnOn();
  }
}
// Problema dessa abordagem:
//
// Se trocar LightBulb por outro dispositivo, a classe Switch precisa mudar.
const lightBulb = new LightBulb();
const switchh = new Switch(lightBulb);
switchh.turnOn();

// Solução:
// Criar uma abstração.
interface Device {
  turnOn(): void;
}

class LightBulb2 implements Device {
  turnOn() {
    console.log('Lâmpada ligada');
  }
}

class TV implements Device {
  turnOn() {
    console.log('TV ligada');
  }
}

// Agora Switch depende
// da abstração Device.

class Switch2 {
  constructor(private device: Device) {}

  turnOn() {
    this.device.turnOn();
  }
}

const lightBulb2 = new LightBulb2();
const switchh2 = new Switch2(lightBulb2);
switchh2.turnOn();
const tv = new TV();
// Switch2 também consegue receber a TV
const switchh3 = new Switch2(tv);
switchh3.turnOn();
