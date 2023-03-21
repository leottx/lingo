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
import { ModalRules } from './ModalRules';
import { AiOutlineInfo } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';

export const Wordle = ({ solution, wordSet }: IWordle) => {
  const [isModalAboutOpen, setIsModalAboutOpen] = useState(false);
  const [isModalRulesOpen, setIsModalRulesOpen] = useState(true);

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
      <header className="text-neutral-100 flex items-center justify-between">
        <button
          onClick={() => setIsModalRulesOpen(true)}
          className="flex items-center justify-center rounded-full border-2 outline-none border-neutral-400 w-[24px] h-[24px]"
        >
          <BsQuestion size="18" />
        </button>
        <h1 className="text-4xl font-black">Lingo</h1>
        <button
          onClick={() => setIsModalAboutOpen(true)}
          className="flex items-center justify-center rounded-full border-2 outline-none border-neutral-400 w-[24px] h-[24px]"
        >
          <AiOutlineInfo size="18" />
        </button>
      </header>
      <Board guesses={pastGuesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleKeyClick={handleKeyClick} />
      <ModalGameOver isCorrect={isCorrect} turn={turn} solution={solution} />
      <ModalAbout isOpen={isModalAboutOpen} setIsOpen={setIsModalAboutOpen} />
      <ModalRules isOpen={isModalRulesOpen} setIsOpen={setIsModalRulesOpen} />
    </div>
  );
};
