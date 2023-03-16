export interface IWordle {
  solution: string;
  wordSet: Set<string>;
}

export type Guess = { key: string; color: string }[];

export interface IBoard {
  guesses: Guess[];
}

export type KeyProps = {
  keyValue: string;
};

export type BoardRowProps = {
  guess: Guess;
};
