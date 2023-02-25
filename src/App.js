import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"

function App() {

  function randomWord(){
    return "Example";
  }  

  const [imgHangman, setImgHangman] = useState("./assets/forca0.png");

  let newWord = randomWord();
  let numLetters = newWord.length; 
  let emptyString = "";
 
  for(let i=0; i<numLetters; i++){
    emptyString += "_ ";
  } 

  return (
    <div>
      <Jogo key="game" imageHangman={imgHangman} word={emptyString} />
      <Letras key="letters" />
    </div>
  );
}

export default App;
