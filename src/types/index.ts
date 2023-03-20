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
  color: any;
  handleKeyClick: (key: string) => void;
};

export type BoardRowProps = {
  guess: Guess | undefined;
  currentGuess: string;
};

export type UsedKeys = { [key: string]: 'green' | 'yellow' | 'gray' };

export interface IGameOverModal {
  isCorrect: boolean;
  turn: number;
  solution: string;
}
