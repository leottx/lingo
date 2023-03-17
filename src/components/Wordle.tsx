// Hooks
import { useWordle } from '../hooks/useWordle';
import { useEffect } from 'react';

// Types
import { IWordle } from '../types';

// Components
import { Keyboard } from './Keyboard';
import { Board } from './Board';

export const Wordle = ({ solution, wordSet }: IWordle) => {
  /* prettier-ignore */
  const { 
    currentGuess,
    handleKeyup,
    pastGuesses,
    isCorrect,
    turn 
  } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup); // Desvincula o método handleKeyup do evento quando o componente for destruído.
  }, [handleKeyup]);

  return (
    <div className="flex flex-col min-h-screen justify-between p-4 max-w-[720px] mx-auto gap-y-4">
      <h1 className="text-4xl text-neutral-100 font-black text-center">
        Lingo
      </h1>
      <Board guesses={pastGuesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard />
    </div>
  );
};
