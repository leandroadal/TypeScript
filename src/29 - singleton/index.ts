/**
 * Constructor private
 * Impede que a classe seja instanciada diretamente com new
 *
 *
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Person {
  private constructor(public nome: string) {}
}
// const person = new Person('João'); //! Erro:

// Singleton

class Database {
  // Armazena a única instância
  private static instance: Database;

  // Constructor privado
  private constructor() {
    console.log('Conectando...');
  }

  // Método responsável por retornar
  // a instância única
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const datab1 = Database.getInstance();
const datab2 = Database.getInstance();

console.log(datab1 === datab2); // true

// Outro exemplo

export class Database2 {
  private static database: Database2;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database2 {
    if (Database2.database) {
      console.log('Retornando instância já criada.');
      return Database2.database;
    }
    console.log('Criando nova instância.');
    Database2.database = new Database2(host, user, password);
    return Database2.database;
  }
}

const db1 = Database2.getDatabase('localhost', 'root', '123456');
db1.connect();
const db2 = Database2.getDatabase('localhost', 'root', '123456');
db2.connect();
const db3 = Database2.getDatabase('localhost', 'root', '123456');
db3.connect();
const db4 = Database2.getDatabase('localhost', 'root', '123456');
db4.connect();
