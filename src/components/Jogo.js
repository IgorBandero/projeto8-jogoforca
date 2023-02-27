import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 1100px;
    height: 470px;
    margin: 60px auto 60px auto;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`
const DivForca = styled.div`
    width: 400px;
`
const CustomImg = styled.img`
    width: 400px;
`
const CustomButtom = styled.button`
    width: 200px;
    height: 60px;
    margin-top: 30px;
    background-color: #27AE60;
    border-radius: 8px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`
const DivPalavra = styled.div`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: end;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const Palavra = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    display: ${({mostraPalavra}) => mostraPalavra};
    color: ${props => props.color};
`

export default function Jogo(props){

    const [mostraPalavra, setMostraPalavra] = useState("none");

    function exibirPalavra(visibilidade) {
        setMostraPalavra(visibilidade);
    }

    return (
        <Container>
           <DivForca>
                <CustomImg data-test="game-image" src={props.imageHangman} alt="Imagem da forca"></CustomImg>
           </DivForca>
           <DivPalavra>
                <CustomButtom data-test="choose-word" onClick={() => {props.funcaoIniciarJogo(); exibirPalavra("inline");}}> Escolher palavra </CustomButtom>
                <Palavra data-test="word" className={props.visibility} style={props.resultado}  > {props.word} </Palavra>
           </DivPalavra>
        </Container>
    )
}