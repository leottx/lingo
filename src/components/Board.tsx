// Components
import { BoardRow } from './BoardRow';

// Types
import { IBoard } from '../types';

export const Board = ({ guesses }: IBoard) => {
  return (
    <section className="space-y-[6px] max-w-[436px] w-4/5 mx-auto">
      {guesses.map((guess, index) => (
        <BoardRow key={`row-${index}`} guess={guess} />
      ))}
    </section>
  );
};
