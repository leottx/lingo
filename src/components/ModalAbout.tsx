// Hooks
import { Fragment } from 'react';

// Components
import { Dialog, Transition } from '@headlessui/react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

// Types
import { IModal } from '../types';

export const ModalAbout = ({ isOpen, setIsOpen }: IModal) => {
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
          <div className="relative">
            <button
              className="relative outline-none z-10 block ml-auto bg-sky-500 rounded-[4px] rounded-br-none rounded-bl-none text-neutral-100 px-4 py-[2px]"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
            <Dialog.Panel className="mx-auto rounded-md rounded-tr-none w-full max-h-[490px] overflow-y-auto max-w-md bg-neutral-50 p-6 text-neutral-800 drop-shadow-lg">
              <h1 className="mb-8">
                <p className="text-sm font-medium">Hi, my name is</p>
                <p className="text-2xl font-bold">Leonardo Teixeira 👋</p>
                <p className="font-medium">Frontend Developer</p>
              </h1>
              <p className="leading-[1.7rem]">
                This game is a Wordle clone. The original game was created by{' '}
                <a
                  href="https://www.powerlanguage.co.uk/"
                  className="decoration-neutral-300 underline-offset-2 decoration-2 underline"
                  target="_blank"
                >
                  Josh Wardle
                </a>
                . The goal of this project was to exercise all the new acquired
                knowledge about React, Tailwind and TypeScript.
              </p>
              <p className="leading-[1.7rem] my-4">
                If you want to know more about me, please, visit{' '}
                <a
                  href="https://leonardotx.com.br"
                  className="inline-flex items-baseline outline-none"
                  target="_blank"
                >
                  <FiGlobe className="self-center" />
                  <span className="ml-[3px] decoration-neutral-300 underline-offset-2 decoration-2 underline">
                    my website
                  </span>
                </a>
                .
              </p>
              <p className="leading-[1.75rem]">
                Follow and connect with me on{' '}
                <a
                  href="https://twitter.com/tadeuleotx"
                  className="inline-flex items-baseline outline-none"
                  target="_blank"
                >
                  <FaTwitter className="self-center" />
                  <span className="ml-[3px] decoration-neutral-300 underline-offset-2 decoration-2 underline">
                    Twitter
                  </span>
                </a>{' '}
                and
                <a
                  href="https://www.linkedin.com/in/leotx/"
                  className="inline-flex items-baseline outline-none"
                  target="_blank"
                >
                  <FaLinkedin className="self-center" />
                  <span className="ml-[2px] decoration-neutral-300 underline-offset-2 decoration-2 underline">
                    LinkedIn
                  </span>
                </a>
                .
              </p>
              <p className="mt-4">I'll be glad to hear from you :)</p>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
