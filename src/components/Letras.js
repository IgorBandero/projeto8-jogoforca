
import styled from "styled-components";

const DivLetras = styled.div`
    width: 680px;
    margin: auto auto;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`
const Letters = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const LetterButtom = styled.button`
    width: 40px;
    height: 40px;
    margin: 6px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    align-items: center;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #7AA7C7;
    cursor: pointer;

    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
`

export default function Letras(props){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <DivLetras>
            <Letters>
                {alfabeto.map(function (letra){ 
                    let statusLetter = props.status;
                    let type = props.type;
                    if(props.letrasEscolhidas.includes(letra)){
                        type = {backgroundColor: "#9FAAB5", color: "#798A9F"};
                        statusLetter = true;
                    }
                    return (<li key={letra}><LetterButtom data-test="letter" style={type} disabled={statusLetter} 
                             onClick={() => {props.clicaLetra(letra)}} >{letra.toUpperCase()}</LetterButtom></li>)
                })}
            </Letters>
        </DivLetras>
    );
}