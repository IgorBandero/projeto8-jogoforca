import { useState } from "react";
import styled from "styled-components";

const DivChute = styled.div`
    width: 630px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto;
    display: flex;
`

const PalavraChute = styled.p`
    font-family: 'Roboto', sans-serif;;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`

const InputChute = styled.input`
    width: 350px;
    height: 40px;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;;
    font-size: 20px;
    padding-left: 10px;
`

const ButtonChute = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    cursor: pointer;
`

export default function Chute(props){
    let chutePalavra;
    const [valor, setValor] = useState("");
    return (
        <DivChute>
            <PalavraChute> Já sei a palavra! </PalavraChute>
            <InputChute data-test="guess-input" disabled={props.status} type="text" value={chutePalavra} onChange={(event) => setValor(event.target.value)} />
            <ButtonChute data-test="guess-button" style={props.type} disabled={props.status} onClick={() => {chutePalavra = ""; props.novoChute(valor);}}> Chutar </ButtonChute>
        </DivChute>
    );
}

// 