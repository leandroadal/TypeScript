/**
 * Utility Types
 *
 * Tipos utilitários prontos do TypeScript
 *
 * Partial<T> - Torna todas as propriedades opcionais
 * Required<T> - Torna todas as propriedades obrigatórias
 * Readonly<T> - Todas as propriedades ficam somente leitura.
 * Exclude<T, U> - Remove tipos de uma union.
 * Extract<T, U> - Extrai tipos específicos de uma union
 */

// Record
// Serve para mapear as propriedades de um objeto.
// O primeiro argumento define o tipo das chaves e o
// segundo define o tipo dos valores.
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// Required
// Transforma todas as propriedades opcionais (com ?)
// de um tipo em propriedades obrigatórias.
type PersonRequired = Required<PessoaProtocol>;
// Partial
// Faz o oposto do Required. Ele transforma todas as
// propriedades de um tipo em opcionais.
type PersonPartial = Partial<PersonRequired>;
// Readonly
// Transforma todas as propriedades de um tipo em somente leitura
type PersonReadonly = Readonly<PersonRequired>;
// Pick
// Permite criar um novo tipo selecionando apenas algumas chaves
// específicas de um tipo existente.
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

const objeto2: PersonRequired = {
  name: 'Luiz',
  lastName: 'Miranda',
  age: 30,
};
console.log('required ' + objeto2);

// Usando o Partial
function updateProfile(
  originalUser: PersonRequired,
  fieldsToUpdate: PersonPartial,
): PersonRequired {
  return { ...originalUser, ...fieldsToUpdate };
}

const user = { name: 'Luiz', lastName: 'Miranda', age: 30 };
// Podemos passar apenas a idade para atualizar
updateProfile(user, { age: 31 });
console.log('partial ' + user.age);

// Usando o ready only

const unchangeableConfig: PersonReadonly = {
  name: 'Sistema',
  lastName: 'Base',
  age: 31,
};

console.log('ready only ' + unchangeableConfig);

// Usando o Pick
const employeeBadge: PersonPick = {
  name: 'Luiz',
  lastName: 'Miranda',
  // idade: 30 // ERRO: 'idade' não existe no tipo PessoaPick
};
console.log('Pick ' + employeeBadge);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // Remove do primeiro o que tem no segundo

// Exemplo de uso para TipoExclude (que vale apenas 'A' | 'B'):
let letraPermitida: TipoExclude;
letraPermitida = 'A'; // Válido
console.log(letraPermitida);
letraPermitida = 'B'; // Válido
// letraPermitida = 'C'; // ERRO: 'C' foi excluído
console.log(letraPermitida);

// Pega do primeiro o que tem comum com o segundo
type TipoExtract = Extract<ABC, CDE>;

// Exemplo de uso para TipoExtract (que vale apenas 'C'):
let letraEmComum: TipoExtract;
// eslint-disable-next-line prefer-const
letraEmComum = 'C'; // Válido
// letraEmComum = 'A'; // ERRO: 'A' não foi extraído da interseção
console.log(letraEmComum);

// exemplo de conexão
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

// Pega os atributos usando o exclude para não pegar o _id
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);
