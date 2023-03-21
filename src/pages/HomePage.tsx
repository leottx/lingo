// Hooks
import { useState, useEffect } from 'react';

// Utils
import { generateWordSet } from '../utils/words';

// Components
import { Wordle } from '../components/Wordle';

export const HomePage = () => {
  const [solutionWord, setSolutionWord] = useState('');
  const [wordSet, setWordSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    generateWordSet().then((words) => {
      setSolutionWord(words.word);
      setWordSet(words.wordSet);
    });
  }, [setSolutionWord, setWordSet]);

  return (
    <div className="w-full bg-black">
      {solutionWord && <Wordle solution={solutionWord} wordSet={wordSet} />}
    </div>
  );
};
