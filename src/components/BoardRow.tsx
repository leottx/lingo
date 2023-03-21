// Utils
import cn from 'classnames';

// Types
import { BoardRowProps } from '../types';

export const BoardRow = ({ guess, currentGuess }: BoardRowProps) => {
  if (currentGuess) {
    let letters = [...currentGuess];
    return (
      <div className="flex text-neutral-100 gap-x-[6px]">
        {letters.map((letter, index) => (
          <div
            className="flex items-center animate-recoil-tile justify-center w-1/4 aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-2xl sm:text-3xl md:text-4xl"
            key={index}
          >
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div
            className="flex items-center justify-center w-1/4 aspect-square rounded-[4px] border-2 border-neutral-600 bg-none uppercase font-bold text-2xl sm:text-3xl md:text-4xl"
            key={index}
          ></div>
        ))}
      </div>
    );
  }

  if (guess) {
    return (
      <div className="flex text-neutral-100 gap-x-[6px]">
        {guess.map((letter, index) => {
          return (
            <div
              className={cn(
                'flex items-center justify-center w-1/4 aspect-square rounded-[4px] border-2 border-neutral-400 uppercase font-bold text-2xl sm:text-3xl md:text-4xl',
                {
                  ['animation-delay-200']: index === 1,
                  ['animation-delay-400']: index === 2,
                  ['animation-delay-600']: index === 3,
                  ['animation-delay-800']: index === 4,
                  ['green animate-flip-tile']: letter.color === 'green',
                  ['yellow animate-flip-tile']: letter.color === 'yellow',
                  ['gray animate-flip-tile']: letter.color === 'gray',
                }
              )}
              key={`key-${index}`}
            >
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex text-neutral-100 gap-x-[6px]">
      {[...Array(5)].map((_, index) => {
        return (
          <div
            className="flex items-center justify-center w-1/4 aspect-square border-2 border-neutral-600 rounded-[4px] uppercase font-bold text-2xl sm:text-3xl md:text-4xl"
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
