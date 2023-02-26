import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras";

function App() {

  let novaPalavra;
  let numLetters;
  let emptyString = "";
  let numErros;
  let arrayWord;

  function randomWord(lista){
    let indice = Math.floor(Math.random() * ((palavras.length-1) + 1));
    return lista[indice];
  }  

  function iniciarJogo(){
    setClassType("activated");
    setStatusDisabledLetters(false);  
    setStatusGameWord("");
    let newWord = randomWord(palavras);
    setWord(newWord);
    numErros = 0;
  }

  const [imgHangman, setImgHangman] = useState("./assets/forca0.png");
  const [statusDisabledLetters, setStatusDisabledLetters] = useState(true);
  const [statusGameWord, setStatusGameWord] = useState("hidden");
  const [classType, setClassType] = useState("disactivated");
  const [word, setWord] = useState("");

  novaPalavra = word;  
  numLetters = novaPalavra.length; 
  emptyString = "";
 
  for(let i=0; i<numLetters; i++){
    emptyString += "_ ";
  } 

  arrayWord = word.split("");

  return (
    <div>
      <Jogo key="game" imageHangman={imgHangman} word={emptyString} visibility={statusGameWord} funcaoIniciarJogo={iniciarJogo} />
      <Letras key="letters" type={classType} status={statusDisabledLetters} />
    </div>
  );
}

export default App;
