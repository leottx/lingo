// Hooks
import { Fragment } from 'react';

// Components
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';

// Types
import { IModal } from '../types';

export const ModalRules = ({ isOpen, setIsOpen }: IModal) => {
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
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-5">
          <div className="relative">
            <button
              className="relative outline-none z-10 -bottom-[1px] block ml-auto bg-sky-500 rounded-[4px] rounded-br-none rounded-bl-none text-neutral-100 px-4 py-[2px]"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
            <Dialog.Panel className="mx-auto rounded-md rounded-tr-none w-full max-h-[490px] overflow-y-auto max-w-md bg-black p-6 text-neutral-100 font-medium border border-neutral-500 drop-shadow-lg md:max-h-none">
              <h2 className="text-2xl font-bold">How to Play</h2>
              <p className="my-4 leading-[1.75rem]">
                Guess the right word in{' '}
                <strong className="underline decoration-neutral-500 underline-offset-2 decoration-2">
                  6 tries
                </strong>
                . After each attempt, the tiles change color to show how close
                you are from the solution.
              </p>
              <h3 className="font-bold text-lg">Examples</h3>
              <div className="flex gap-1 text-neutral-100 my-2">
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-transparent bg-green-600 rounded-[4px] uppercase font-bold text-lg">
                  S
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  A
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  U
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  C
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  E
                </div>
              </div>
              <p>
                <strong className="underline decoration-neutral-500 underline-offset-2 decoration-2">
                  S
                </strong>{' '}
                is in the word and in the right position.
              </p>
              <div className="flex gap-1 text-neutral-100 mb-2 mt-6">
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  C
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  A
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-transparent bg-yellow-500 rounded-[4px] uppercase font-bold text-lg">
                  M
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  E
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  L
                </div>
              </div>
              <p className="mb-6">
                <strong className="underline decoration-neutral-500 underline-offset-2 decoration-2">
                  M
                </strong>{' '}
                is in the word but in the wrong position.
              </p>
              <div className="flex gap-1 text-neutral-100 my-2">
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  L
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  E
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  A
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-transparent bg-neutral-700/90 rounded-[4px] uppercase font-bold text-lg">
                  S
                </div>
                <div className="flex items-center justify-center w-1/5 max-w-[44px] aspect-square border-2 border-neutral-400 rounded-[4px] uppercase font-bold text-lg">
                  E
                </div>
              </div>
              <p>
                <strong className="underline decoration-neutral-500 underline-offset-2 decoration-2">
                  S
                </strong>{' '}
                is not in the word in any position.
              </p>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
