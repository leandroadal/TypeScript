# Entendendo Generics no TypeScript

Este repositório contém uma explicação prática e didática sobre o conceito de **Generics** no TypeScript, demonstrando como criar código reutilizável, flexível e tipado.

---

## O que são Generics?

Generics são uma ferramenta do TypeScript que permite criar componentes (funções, classes ou interfaces) que funcionam com diversos tipos de dados, em vez de um único tipo.

Eles agem como **"variáveis de tipo"**, onde o tipo real é definido apenas no momento em que a função ou classe é executada.

### O Problema: Sem Generics

Se criarmos uma função de filtro que aceita apenas números, não podemos reutilizá-la para strings sem perder a segurança de tipos (usando `any`):

```typescript
// Aceita apenas números
function filtrarNumeros(array: number[]): number[] { ... }

// Usando 'any' perdemos o controle dos tipos
function filtrarQualquerCoisa(array: any[]): any[] { ... } 
```

### A Solução: Com Generics

Com Generics, criamos um modelo que se adapta ao tipo de dado fornecido:

```typescript
function filtrar<T>(array: T[]): T[] { ... }
```

---

## Exemplo Prático: Criando um Filtro Customizado

Abaixo está a implementação de uma função utilitária chamada `meuFilter`, que replica o comportamento do método `.filter()` nativo do JavaScript de forma totalmente tipada.

### Código Fonte

```typescript
// 1. Definição do tipo do Callback utilizando o parâmetro genérico <U>
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// 2. Função meuFilter que utiliza o parâmetro genérico <T>
export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray: T[] = [];

  array.forEach((item, i) => {
    // O callback recebe o tipo correto T definido pelo array de entrada
    if (callbackfn(item, i, array)) {
      novoArray.push(item);
    }
  });

  return novoArray;
}
```

#### Explicação

Aqui está a explicação detalhada de cada bloco do código para entender como o TypeScript conecta os tipos:

---

##### Bloco 1: `type FilterCallback<U>`

* **O que significa:** É a criação de um modelo (template) para uma função de callback.
* **O papel do `<U>`:** O `<U>` é uma variável de tipo vazia. Esse bloco diz: *"Estou criando um tipo de função chamado `FilterCallback`. Quem for usar esse tipo precisa decidir qual tipo de dado vai colocar no lugar do `U`."*

---

##### Bloco 2: `(value: U, index?: number, array?: U[])`

* **O que significa:** É a lista de parâmetros que a função de callback vai receber.
* **O papel do `value: U` e `array?: U[]`:** Eles usam a variável de tipo `U` que foi definida no Bloco 1. Isso garante consistência: se o valor avaliado (`value`) for do tipo `U` (por exemplo, `string`), o array recebido no terceiro parâmetro também precisa ser um array de `U` (`string[]`).

---

##### Bloco 3: `export function meuFilter<T>`

* **O que significa:** É a declaração da nossa função de filtragem.
* **O papel do `<T>`:** Indica ao TypeScript que `meuFilter` é uma função genérica. O `<T>` funciona como um "sensor de tipo". Quando alguém chamar essa função passando um array, o TypeScript vai analisar esse array, descobrir o tipo dos elementos dele e salvar esse tipo na variável `T`.

---

##### Bloco 4: `array: T[]`

* **O que significa:** É o primeiro parâmetro da função `meuFilter`.
* **O papel do `T[]`:** Diz que o argumento enviado deve ser um array contendo elementos do tipo `T`.
  * *Exemplo prático:* Se você passar `[1, 2, 3]`, o TypeScript analisa este bloco, detecta que é um array de números e define que, para esta execução, **`T` é igual a `number`**.

---

##### Bloco 5: `callbackfn: FilterCallback<T>`

* **O que significa:** É o segundo parâmetro da função `meuFilter`.
* **O papel do `<T>` aqui (A Ponte):** Este é o ponto de união. Aqui nós pegamos o tipo `T` (que foi detectado no Bloco 4) e o enviamos como argumento para o tipo `FilterCallback` (substituindo o `U` do Bloco 1).
  * *Exemplo prático:* Se o TypeScript detectou no Bloco 4 que `T` é `number`, este bloco se transforma internamente em `FilterCallback<number>`. Isso significa que o callback agora só aceitará receber um `number` no seu primeiro parâmetro.

---

##### Bloco 6: `: T[]` (no final da assinatura da função)

* **O que significa:** É o tipo de retorno da função `meuFilter`.
* **O papel do `T[]`:** Garante que a função devolverá um array do mesmo tipo que recebeu. Se ela recebeu um array de `number` (`T[]`), ela obrigatoriamente tem que retornar um array de `number` (`T[]`), impedindo que tipos diferentes sejam misturados no resultado final.

---

## Como funciona a convenção de letras?

Por convenção, o TypeScript utiliza letras únicas maiúsculas para representar os parâmetros de tipo:

| Letra | Significado | Uso Comum |
| :---: | :--- | :--- |
| **`T`** | **T**ype (Tipo) | O primeiro ou principal tipo genérico de um componente. |
| **`U`** | Próxima letra após o T | Usado para representar um segundo tipo genérico no mesmo escopo. |
| **`K`** | **K**ey (Chave) | Representa a propriedade/chave de um objeto. |
| **`V`** | **V**alue (Valor) | Representa o valor associado a uma chave de um objeto. |
