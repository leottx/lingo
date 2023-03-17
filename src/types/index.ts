export interface IWordle {
  solution: string;
  wordSet: Set<string>;
}

export type Guess = { key: string; color: string }[];

export interface IBoard {
  guesses: (Guess | undefined)[];
  currentGuess: string;
  turn: number;
}

export type KeyProps = {
  keyValue: string;
};

export type BoardRowProps = {
  guess: Guess | undefined;
  currentGuess: string;
};
