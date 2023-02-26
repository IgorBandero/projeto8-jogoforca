
export default function Jogo(props){

    return (
        <div className="div-container">
           <div className="div-forca">
                <img data-test="game-image" src={props.imageHangman} alt="Imagem da forca"></img>
           </div>
           <div className="div-palavra">
                <button data-test="choose-word" onClick={props.funcaoIniciarJogo}> Escolher palavra </button>
                <p data-test="word" className={props.visibility} > {props.word} </p>
           </div>
        </div>
    )
}