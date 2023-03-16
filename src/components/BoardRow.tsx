import cn from 'classnames';

// Types
import { BoardRowProps } from '../types';

export const BoardRow = ({ guess }: BoardRowProps) => {
  return (
    <div className="flex text-neutral-100 gap-x-[6px]">
      {guess.map((letter, index) => (
        <div
          className={cn(
            'flex items-center justify-center w-1/4 aspect-square bg-neutral-600 rounded-[4px] uppercase font-bold text-2xl sm:text-3xl md:text-4xl',
            {
              ['!bg-green-500']: letter.color === 'green',
              ['!bg-yellow-500']: letter.color === 'yellow',
              ['!bg-neutral-700']: letter.color === 'gray',
            }
          )}
          key={`key-${index}`}
        >
          {letter.key}
        </div>
      ))}
    </div>
  );
};
