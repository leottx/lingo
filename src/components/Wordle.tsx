// Hooks
import { useWordle } from "../hooks/useWordle";
import { useEffect } from "react";

// Types
import { IWordle} from "../types";

export const Wordle = ({solution, wordSet}:IWordle) => {
  const { currentGuess, handleKeyup, pastGuesses, isCorrect, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup); // Desvincula o método handleKeyup do evento quando o componente for destruído.
  }, [handleKeyup]);

  useEffect(() => {
    console.log({currentGuess, turn, isCorrect});
  }, [pastGuesses, turn, isCorrect])

  return (
    <div>
      Current Guess: {currentGuess}
    </div>
  )
}
