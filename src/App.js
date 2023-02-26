import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras";
import Chute from "./components/Chute";

function App() {  

  function randomWord(lista){
    let novaPalavra;
    let numLetters;
    let emptyString = "";
    let indice = Math.floor(Math.random() * ((palavras.length-1) + 1));
    
    novaPalavra = lista[indice];  
    numLetters = novaPalavra.length; 

    for(let i=0; i<numLetters; i++){
      emptyString += "_ ";
    } 

    setDisplayedWord(emptyString);
    return novaPalavra;
  }  

  function iniciarJogo(){
    let newWord = randomWord(palavras);
    setWord(newWord);
    setClassType("activated");
    setStatusDisabledLetters(false);  
    setStatusGameWord("");
    setLettersList([]);
    setImgHangman("./assets/forca0.png");
    setErros(0);
  }

  function escolheLetra(letra){
    let novaLetra;
    if (lettersList === []){
      novaLetra = [letra];
    }
    else {
      novaLetra = [...lettersList, letra];
    }     
    setLettersList(novaLetra);
    verificaLetra(letra);
  }

  function verificaLetra(letra){
    let arrayWord = word.split("");
    let arraySemAcento = removerAcentos(arrayWord);
    let atualizaPalavra = (displayedWord.trim()).split(" ");
    let novaString = "";
    let erro = true;
    let numErros = 0;
    let numLetrasOcultas = 0;

    for (let i=0; i<arrayWord.length; i++){
      if (letra === arraySemAcento[i]){
        erro = false;
        atualizaPalavra[i] = arrayWord[i]; 
      }
    }

    if (erro){
      numErros += erros + 1;
      setErros(numErros);
      mudaImagem(numErros);
    }

    for(let i=0; i<atualizaPalavra.length; i++){
      if (atualizaPalavra[i] === "_"){
        numLetrasOcultas++;
      }
      novaString += atualizaPalavra[i] + " ";
    } 
    if (numErros === 6){
      novaString = word;
    }
    setDisplayedWord(novaString);
    if (numLetrasOcultas === 0){
      setTimeout(finalizaJogo(numErros), 500);
    }
  }

  function mudaImagem(numErros){
    let imagem = "./assets/forca" + numErros + ".png";
    setImgHangman(imagem);
    if (numErros === 6){
      setTimeout(finalizaJogo(numErros), 500);
    }
  }

  function finalizaJogo(numErros){
    let palavra = word;
    setDisplayedWord(palavra);
    setLettersList([]);
    setClassType("disactivated");
    setStatusDisabledLetters(true); 
    if (numErros === 6){
      setStatusGameWord("perdeu");
    }
    else {
      setStatusGameWord("ganhou");
    }
  }

  function chutar(palpite){
    let arrayPalpite = palpite.split("");
    arrayPalpite = removerAcentos(arrayPalpite);    
    let arrayPalavra = word.split("");
    arrayPalavra = removerAcentos(arrayPalavra);
    let chute = "";
    let palavra = "";
    
    for (let i=0; i<arrayPalpite.length; i++){
      chute += arrayPalpite[i];
    }
    for (let i=0; i<arrayPalavra.length; i++){
      palavra += arrayPalavra[i];
    }

    if (chute.toUpperCase().trim() === palavra.toUpperCase().trim()){
      setDisplayedWord(word);
      finalizaJogo(0);
    }
    else {
      mudaImagem(6);
      finalizaJogo(6);
    }
  }

  function removerAcentos(arrayPalavra){
    const novoArray = [];
    for(let i=0; i<arrayPalavra.length; i++){
      if (arrayPalavra[i].toUpperCase() === "Á" || arrayPalavra[i].toUpperCase() === "À" ||
          arrayPalavra[i].toUpperCase() === "Â" || arrayPalavra[i].toUpperCase() === "Ã") {
        novoArray.push("a");
      }
      else if (arrayPalavra[i].toUpperCase() === "É" || arrayPalavra[i].toUpperCase() === "Ê") {
        novoArray.push("e");
      }
      else if (arrayPalavra[i].toUpperCase() === "Í") {
        novoArray.push("i");
      }
      else if (arrayPalavra[i].toUpperCase() === "Ó" || arrayPalavra[i].toUpperCase() === "Ô" ||
               arrayPalavra[i].toUpperCase() === "Õ") {
        novoArray.push("o");
      }
      else if (arrayPalavra[i].toUpperCase() === "Ú") {
        novoArray.push("u");
      }
      else if (arrayPalavra[i].toUpperCase() === "Ç") {
        novoArray.push("c");
      }
      else {
        novoArray.push(arrayPalavra[i]);
      }
    }
    return novoArray;
  }

  const [imgHangman, setImgHangman] = useState("./assets/forca0.png");
  const [classType, setClassType] = useState("disactivated");
  const [statusDisabledLetters, setStatusDisabledLetters] = useState(true);
  const [lettersList, setLettersList] = useState([]);
  const [statusGameWord, setStatusGameWord] = useState("hidden");
  const [word, setWord] = useState("");
  const [displayedWord, setDisplayedWord] = useState("");
  const [erros, setErros] = useState(0);
  const [chute, setChute] = useState("");

  return (
    <div>
      <Jogo key="game" imageHangman={imgHangman} word={displayedWord} visibility={statusGameWord} 
      funcaoIniciarJogo={iniciarJogo} />
      <Letras key="letters" type={classType} status={statusDisabledLetters} clicaLetra={escolheLetra} letrasEscolhidas={lettersList} />
      <Chute key="guess" type={classType} status={statusDisabledLetters} novoChute={chutar} />
    </div>
  );
}

export default App;
