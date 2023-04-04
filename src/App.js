//CSS
import "./App.css";

//REACT
import { useCallback, useState, UseEffect } from "react";

//Data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//Variáveis
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState([]);

  const pickCategoryAndLetter = () => {
    const categories = Object.keys(words);
    //Pick a random category
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //Pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  };

  const startGame = () => {
    const { category, word } = pickCategoryAndLetter();
    //create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letra) => letra.toLowerCase());

    console.log(wordLetters);

    //fill state
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(letters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
