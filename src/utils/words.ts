import wordsBank from '../data/words-bank.txt';

export const generateWordSet = async () => {
  let wordSet:Set<string>;
  let randomWord:string;

  const response = await fetch(wordsBank);
  const data = await response.text();
  const wordArray = data.trim().split("\n");

  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  wordSet = new Set(wordArray);

  return { wordSet, word: randomWord };
};