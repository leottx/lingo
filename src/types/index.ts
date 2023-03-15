export interface IWordle {
  solution: string,
  wordSet: Set<string>
}

export type Guess = {key: string, color: string}[];