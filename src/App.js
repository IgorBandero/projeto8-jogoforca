import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras";

function App() {

  function randomWord(){
    return "Example";
  }  

  const [imgHangman, setImgHangman] = useState("./assets/forca0.png");
  const [statusGameLetters, setStatusGame] = useState("disabled");
  const [statusGameWord, setStatusGameWord] = useState("hidden");
  const [classType, setClassType] = useState("disactivated");

  let newWord = randomWord();
  let numLetters = newWord.length; 
  let emptyString = "";
 
  for(let i=0; i<numLetters; i++){
    emptyString += "_ ";
  } 

  return (
    <div>
      <Jogo key="game" imageHangman={imgHangman} word={emptyString} visibility={statusGameWord}/>
      <Letras key="letters" type={classType} status={statusGameLetters} />
    </div>
  );
}

export default App;
