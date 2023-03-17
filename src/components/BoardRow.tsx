// Hooks
import { useState, useEffect } from 'react';

// Utils
import cn from 'classnames';

// Types
import { BoardRowProps } from '../types';

export const BoardRow = ({
  guess,
  currentGuess,
  isCurrentRow,
  doNotWait,
}: BoardRowProps) => {
  const [styleWithDelay, setStyleWithDelay] = useState(doNotWait);

  console.log({ styleWithDelay });

  useEffect(() => {
    if (!doNotWait) {
      const timeoutId = setTimeout(() => {
        setStyleWithDelay(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [styleWithDelay]);

  if (currentGuess) {
    let letters = [...currentGuess];
    return (
      <div className="flex text-neutral-100 gap-x-[6px]">
        {letters.map((letter, index) => (
          <div
            className="flex items-center animate-recoil-tile justify-center w-1/4 aspect-square border-2 border-neutral-600 rounded-[4px] uppercase font-bold text-2xl sm:text-3xl md:text-4xl"
            key={index}
          >
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div className="flex items-center justify-center w-1/4 aspect-square rounded-[4px] border-2 border-neutral-600 bg-none uppercase font-bold text-2xl sm:text-3xl md:text-4xl"></div>
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
                'flex items-center justify-center w-1/4 aspect-square bg-neutral-600 rounded-[4px] uppercase font-bold text-2xl sm:text-3xl md:text-4xl',
                {
                  ['animation-delay-200']: index === 1,
                  ['animation-delay-400']: index === 2,
                  ['animation-delay-600']: index === 3,
                  ['animation-delay-800']: index === 4,
                  ['green border-none animate-flip-tile']:
                    letter.color === 'green',
                  ['yellow border-none animate-flip-tile']:
                    letter.color === 'yellow',
                  ['gray border-none animate-flip-tile']:
                    letter.color === 'gray',
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

  if (isCurrentRow && styleWithDelay) {
    return (
      <div className="flex text-neutral-100 gap-x-[6px]">
        {[...Array(5)].map((_, index) => (
          <div className="flex items-center justify-center w-1/4 aspect-square border-2 border-neutral-600 bg-transparent rounded-[4px] uppercase font-bold text-2xl sm:text-3xl md:text-4xl"></div>
        ))}
      </div>
    );
  }

  // Se for a linha da rodada atual
  return (
    <div className="flex text-neutral-100 gap-x-[6px]">
      {[...Array(5)].map((_, index) => {
        return (
          <div className="flex items-center justify-center w-1/4 aspect-square border-2 border-neutral-600 bg-neutral-600 rounded-[4px] uppercase font-bold text-2xl sm:text-3xl md:text-4xl"></div>
        );
      })}
    </div>
  );
};
