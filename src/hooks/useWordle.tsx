// Hooks
import { useState } from 'react';

// Types
import { Guess, UsedKeys } from '../types';

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [pastGuesses, setPastGuesses] = useState<(Guess | undefined)[]>(
    Array.from({ length: 6 }, () => undefined)
  ); // Cada tentativa é um array
  const [wordHistory, setWordHistory] = useState<string[]>([]); // Cada tentativa é uma string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState<UsedKeys>({});

  /*
    Formata uma tentativa em um array de objetos.
    Cada objeto representando uma letra da palavra tentada [{key: 'a', color: 'yellow'}]
  */
  const formatGuess = () => {
    const solutionArray: (string | null)[] = [...solution];
    const formattedGuess = [...currentGuess].map((letter, index) => ({
      key: letter,
      color: 'gray',
    }));

    formattedGuess.forEach((letter, index) => {
      if (solutionArray[index] === letter.key) {
        formattedGuess[index].color = 'green';
        solutionArray[index] = null;
      }
    });

    formattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[index].color = 'yellow';
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  /*
    Adiciona a palavra tentada no array de tentativa.
    Atualiza os estado isCorrect se a palavra tentada estiver correta.
    Incrementa em 1 o estado que monitora a quantidade de rodadas.
  */
  const addNewGuess = (formattedGuess: Guess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setPastGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setWordHistory((prevWordHistory) => [...prevWordHistory, currentGuess]);
    setTurn((prevTurn) => prevTurn + 1);
    setUsedKeys((prevUsedKeys) => {
      formattedGuess.forEach((l) => {
        const currentColor = prevUsedKeys[l.key];

        if (l.color === 'green') {
          prevUsedKeys[l.key] = 'green';
          return;
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[l.key] = 'yellow';
          return;
        }
        if (l.color === 'gray' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[l.key] = 'gray';
          return;
        }
      });

      return prevUsedKeys;
    });
    setCurrentGuess('');
  };

  /*
    Gerencia teclas pressionadas e atualiza o estado da tentativa atual.
    Se a tecla apertada for o Enter, checa se a palavra pode ser adicionada e, caso sim,
    a adiciona.
  */
  const handleKeyup = ({ key }: KeyboardEvent) => {
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length >= 5) return;
      setCurrentGuess((prev) => prev + key);
      return;
    } else if (key === 'Enter') {
      if (
        currentGuess.length < 5 ||
        turn > 5 ||
        wordHistory.includes(currentGuess)
      )
        return;

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
      return;
    } else if (key === 'Delete' || key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
  };

  return { turn, currentGuess, pastGuesses, isCorrect, handleKeyup, usedKeys };
};
