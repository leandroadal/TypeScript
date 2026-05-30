type VoteOption = {
  numberOfVotes: number;
  option: string;
};

class Voting {
  private _votingOptions: VoteOption[] = [];
  constructor(public details: string) {}

  addVotingOption(votingOption: VoteOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(votingIndex: number): void {
    if (!this._votingOptions[votingIndex]) return;
    this._votingOptions[votingIndex].numberOfVotes += 1;
  }

  get votingOptions(): VoteOption[] {
    return this._votingOptions;
  }
}

class VotingApp {
  private votings: Voting[] = [];

  addVoting(voting: Voting): void {
    this.votings.push(voting);
  }

  showVotings(): void {
    for (const voting of this.votings) {
      console.log(voting.details);
      for (const votingOption of voting.votingOptions) {
        console.log(`${votingOption.option}: ${votingOption.numberOfVotes}`);
      }
      console.log('###');
      console.log('');
    }
  }
}

function getRandom(max: number = 100): number {
  return Math.floor(Math.random() * (max + 1));
}

function votingLoop(voting: Voting, optionName: string, nVotes?: number): void {
  // Procura o índice da opção pelo nome, ignorando diferenças de maiúsculas/minúsculas
  const optionIndex = voting.votingOptions.findIndex(
    (opt) => opt.option.toLowerCase() === optionName.toLowerCase(),
  );

  // Se o índice não for encontrado (-1), o voto é ignorado para evitar erros de digitação
  if (optionIndex === -1) {
    console.error(
      `Erro: A opção "${optionName}" não é válida para a votação: "${voting.details}".`,
    );
    return;
  }

  const x = nVotes ?? getRandom();
  for (let i = 0; i < x; i++) {
    voting.vote(optionIndex);
  }
}

// --- Execução do Caso 1 (Linguagens) ---
const voting1 = new Voting('Qual sua linguagem de programação favorita?');
voting1.addVotingOption({ option: 'Python', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'JavaScript', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'TypeScript', numberOfVotes: 0 });

// Votações corretas
votingLoop(voting1, 'Python');
votingLoop(voting1, 'JavaScript');
votingLoop(voting1, 'TypeScript');

// Teste de erro de digitação (não deve computar votos)
votingLoop(voting1, 'Pyth0n');

// --- Execução do Caso 2 (Cores) ---
const voting2 = new Voting('Qual sua cor favorita?');
voting2.addVotingOption({ option: 'Vermelho', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Verde', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Azul', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Roxo', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Marrom', numberOfVotes: 0 });

// Usando o votingLoop para o segundo caso com quantidade de votos específica
votingLoop(voting2, 'Vermelho', 1);
votingLoop(voting2, 'Azul', 3);
votingLoop(voting2, 'Verde', 1);
votingLoop(voting2, 'Marrom', 1);

// Teste de erro de digitação
votingLoop(voting2, 'Amarelo');

// --- Exibindo Resultados ---
const votingApp = new VotingApp();
votingApp.addVoting(voting1);
votingApp.addVoting(voting2);

votingApp.showVotings();
