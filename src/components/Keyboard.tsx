// Components
import { Key } from './Key';

export const Keyboard = ({ usedKeys, handleKeyClick }: any) => {
  const keyValues = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'back'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'enter'],
  ];

  return (
    <div className="flex flex-col gap-y-2">
      {keyValues.map((keyRow) => {
        return (
          <div key={keyRow[0]} className="grid grid-cols-keysRow gap-x-[6px]">
            {keyRow.map((keyValue) => {
              const color = usedKeys[keyValue];
              return (
                <Key
                  key={keyValue}
                  keyValue={keyValue}
                  color={color}
                  handleKeyClick={handleKeyClick}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
