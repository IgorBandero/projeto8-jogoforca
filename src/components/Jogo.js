
export default function Jogo(props){
    return (
        <div className="div-container">
           <div className="div-forca">
                <img src={props.imageHangman} alt="Imagem da forca"></img>
           </div>
           <div className="div-palavra">
                <button> Escolher palavra </button>
                <p className={props.visibility} > {props.word} </p>
           </div>
        </div>
    )
}