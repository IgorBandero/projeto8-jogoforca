
export default function Letras(props){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="div-letras">
            <ul className="letters">
                {alfabeto.map(function (letra){ 
                    return (<li key={letra}><button className="disactivated">{letra.toUpperCase()}</button></li>);
                })}
            </ul>
        </div>
    );
}