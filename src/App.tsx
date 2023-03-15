// Hooks
import { useState, useEffect } from "react";

// Utils
import { generateWordSet } from "./utils/words";

// Components
import { Wordle } from "./components/Wordle";

function App() {
  const [solutionWord, setSolutionWord] = useState('');
  const [wordSet, setWordSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    generateWordSet().then(words => {
      setSolutionWord(words.word);
      setWordSet(words.wordSet)
    });
  }, [setSolutionWord, setWordSet]);

  return (
    <div>
      <h1>Wordle Clone - New Logic</h1>
      {solutionWord && <Wordle solution={'hello'} wordSet={wordSet}/>}
    </div>
  )
}

export default App
