// Hooks
import { useState, useEffect, Fragment } from 'react';

// Components
import { Dialog, Transition } from '@headlessui/react';

// Types
import { IGameOverModal } from '../types';

export const ModalGameOver = ({
  isCorrect,
  turn,
  solution,
}: IGameOverModal) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isCorrect || turn > 5) {
      setTimeout(() => setIsOpen(true), 2000);
    }
  }, [isCorrect, turn]);

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}
    >
      <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed delay- inset-0 bg-black/30 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-5">
          <Dialog.Panel className="mx-auto rounded-md w-full max-w-md bg-neutral-50 px-6 pt-5 pb-6 text-neutral-800 drop-shadow-lg">
            {isCorrect && (
              <div className="text-center">
                <Dialog.Title className="text-2xl mb-4 font-bold">
                  You win!
                </Dialog.Title>
                <Dialog.Description>
                  You found the solution in{' '}
                  <strong>{`${turn} ${turn > 1 ? 'guesses' : 'guess'}`}</strong>
                </Dialog.Description>
              </div>
            )}
            {!isCorrect && (
              <div className="text-center">
                <Dialog.Title className="text-2xl mb-4 font-bold">
                  Nevermind!
                </Dialog.Title>
                <Dialog.Description>
                  The solution was: <strong>{solution}</strong>
                </Dialog.Description>
                <p>Better luck next time :)</p>
              </div>
            )}
            <button
              className="mx-auto block rounded-md mt-6 font-medium bg-sky-500 px-4 py-2 border-none text-neutral-100 outline-none transition-colors duration-100 hover:bg-sky-600"
              type="button"
              onClick={() => window.location.reload()}
            >
              Play again!
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};
