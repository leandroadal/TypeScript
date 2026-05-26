# Jornada TypeScript

Projeto criado para acompanhar e praticar os conceitos do curso de **JavaScript e TypeScript do básico ao avançado**, com foco na seção de **TypeScript**, ministrado por Luiz Otávio Miranda na Udemy.

O repositório reúne exemplos, exercícios e aplicações desenvolvidas ao longo da jornada de aprendizado, explorando desde os fundamentos até conceitos mais avançados da linguagem.

## Objetivo

Este repositório tem como foco:

- Aprender os fundamentos do TypeScript
- Praticar tipagem estática
- Explorar recursos modernos da linguagem
- Desenvolver projetos e exercícios práticos
- Evoluir boas práticas de desenvolvimento

## Tecnologias utilizadas

- TypeScript
- Node.js
- JavaScript

## O que é TypeScript?

O **TypeScript** é um superconjunto (superset) de JavaScript desenvolvido pela Microsoft. Ele adiciona **tipagem estática opcional** e outros recursos avançados à linguagem.

O ponto principal é: **O navegador não entende TypeScript.** Por isso, o código TS é "transpilado" (convertido) para JavaScript antes de ser executado.

---

## 🔄 TypeScript vs JavaScript

| Característica | JavaScript | TypeScript |
| :--- | :--- | :--- |
| **Tipagem** | Dinâmica (definida na execução) | Estática (definida no desenvolvimento) |
| **Erros** | Descobertos apenas ao rodar o código | Descobertos durante a escrita (tempo de compilação) |
| **Complexidade** | Ideal para scripts simples | Ideal para aplicações de grande escala |
| **Execução** | Direta no navegador/Node.js | Precisa ser compilado para JS primeiro |
| **IntelliSense** | Limitado | Excelente (autocompletar preciso) |

---

## ✅ Vantagens

1. **Detecção Precoce de Erros:** Identifica erros de digitação ou tipos incompatíveis antes mesmo de você abrir o navegador.
2. **Autocompletar (IntelliSense):** O editor (como VS Code) entende exatamente quais propriedades um objeto tem.
3. **Refatoração Segura:** Mudar o nome de uma variável ou função em todo o projeto torna-se muito mais confiável.
4. **Documentação Implícita:** O tipo dos dados serve como uma documentação viva do que as funções esperam e retornam.

## ❌ Desvantagens

1. **Curva de Aprendizado:** Exige aprender novos conceitos como Interfaces, Generics e Enums.
2. **Configuração Inicial:** Requer a instalação e configuração do compilador (`tsconfig.json`).
3. **Verbosidade:** Você precisará escrever um pouco mais de código para definir os tipos.

---

## 💻 Exemplos Práticos: O que muda?

### 1. Tipagem de Variáveis e Funções

No JS, você pode passar qualquer coisa para uma função. No TS, você define as regras.

**JavaScript:**

```javascript
function somar(a, b) {
  return a + b;
}

console.log(somar(5, "10")); // Resultado: "510" (Erro de lógica silencioso)
```

**TypeScript:**

```typescript
function somar(a: number, b: number): number {
  return a + b;
}

// console.log(somar(5, "10")); // O editor vai apontar um ERRO antes de rodar
console.log(somar(5, 10)); // Resultado: 15
```

---

### 2. Interfaces (Definindo a forma de objetos)

Interfaces ajudam a garantir que objetos sigam um padrão rigoroso.

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
  idade?: number; // A interrogação torna o campo opcional
}

const novoUsuario: Usuario = {
  id: 1,
  nome: "Felipe",
  email: "felipe@email.com"
  // Se eu esquecer o 'id' ou escrever 'name' em vez de 'nome', o TS avisa.
};
```

---

### 3. Union Types e Enums

O TS permite que uma variável aceite mais de um tipo de valor ou valores específicos.

```typescript
// Union Types
let resultado: string | number;
resultado = "Sucesso";
resultado = 200;

// Enums (Conjunto de constantes nomeadas)
enum StatusPedido {
  Aguardando = "AGUARDANDO",
  Pago = "PAGO",
  Enviado = "ENVIADO"
}

const statusAtual = StatusPedido.Pago;
```

---

### 4. Generics (Reutilização de código)

Permite criar componentes ou funções que trabalham com vários tipos, mantendo a segurança.

```typescript
function retornarArray<T>(itens: T[]): T[] {
  return new Array().concat(itens);
}

const numeros = retornarArray<number>([1, 2, 3]);
const strings = retornarArray<string>(["Oi", "Tudo bem"]);
```

---

## 🚀 Como começar?

### Instalação local

### 🛠️ Instalação Local (Recomendado)

Diferente da instalação global, a instalação local mantém as dependências dentro da pasta do projeto, facilitando o compartilhamento e o controle de versão.

1. Inicie o gerenciador de pacotes (caso não tenha o `package.json`):

    ```bash
    npm init -y
    ```

2. Instale o TypeScript como dependência de desenvolvimento:

    ```bash
    npm install --save-dev typescript
    ```

3. Inicialize o arquivo de configuração (`tsconfig.json`):
Utilizamos o `npx` para executar o binário instalado localmente na pasta `node_modules`.

    ```bash
    npx tsc --init
    ```

4. Compilar o código:
Para converter seus arquivos `.ts` para `.js`:

    ```bash
    # Para um arquivo específico
    npx tsc arquivo.ts

    # Para o projeto inteiro (baseado no tsconfig.json)
    npx tsc
    ```

### Instalação global

1. Instale o TypeScript globalmente:

   ```bash
   npm install -g typescript
   ```

2. Inicialize um projeto:

   ```bash
   tsc --init
   ```

3. Converta seu arquivo `.ts` para `.js`:

   ```bash
   tsc arquivo.ts
   ```

### 💡 Dica: Execução em tempo real (Sem compilar manualmente)

Para facilitar seus estudos e testar o código rapidamente sem precisar gerar arquivos `.js` o tempo todo, recomendo instalar o `ts-node`:

1. **Instale o ts-node:**

   ```bash
   npm install --save-dev ts-node
   ```

2. **Execute o arquivo diretamente:**

   ```bash
   npx ts-node arquivo.ts
   ```

---

### Por que local e não global?

- **Portabilidade:** Se você levar seu projeto para outra máquina, basta dar um `npm install`.
- **Conflitos:** Você evita conflitos de versões diferentes do TypeScript entre projetos antigos e novos.

---
