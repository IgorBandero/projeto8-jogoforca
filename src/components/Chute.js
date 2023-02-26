import { useState } from "react";

export default function Chute(props){
    let chutePalavra;
    const [valor, setValor] = useState("");
    return (
        <div className="div-chute">
            <p> Já sei a palavra! </p>
            <input data-test="guess-input" disabled={props.status} type="text" value={chutePalavra} onChange={(event) => setValor(event.target.value)} />
            <button data-test="guess-button" className={props.type} disabled={props.status} onClick={() => {props.novoChute(valor)}}> Chutar </button>
        </div>
    );
}

// 