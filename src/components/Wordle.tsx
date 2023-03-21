// Hooks
import { useWordle } from '../hooks/useWordle';
import { useEffect, useState } from 'react';

// Types
import { IWordle } from '../types';

// Components
import { Keyboard } from './Keyboard';
import { Board } from './Board';
import { ModalGameOver } from './ModalGameOver';
import { ModalAbout } from './ModalAbout';
import { FiInfo } from 'react-icons/fi';

export const Wordle = ({ solution, wordSet }: IWordle) => {
  const [isModalAboutOpen, setIsModalAboutOpen] = useState(false);

  /* prettier-ignore */
  const { 
    currentGuess,
    handleKeyup,
    pastGuesses,
    isCorrect,
    turn, 
    usedKeys,
    handleKeyClick
  } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect || turn > 5) {
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup); // Desvincula o método handleKeyup do evento quando o componente for destruído.
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div className="flex flex-col min-h-screen justify-between px-4 pt-6 pb-4 max-w-[720px] mx-auto gap-y-4">
      <header className="text-neutral-100 flex items-center">
        <h1 className="text-4xl font-black ml-auto">Lingo</h1>
        <button className="ml-auto" onClick={() => setIsModalAboutOpen(true)}>
          <FiInfo size="20" />
        </button>
      </header>
      <Board guesses={pastGuesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleKeyClick={handleKeyClick} />
      <ModalGameOver isCorrect={isCorrect} turn={turn} solution={solution} />
      <ModalAbout isOpen={isModalAboutOpen} setIsOpen={setIsModalAboutOpen} />
    </div>
  );
};
