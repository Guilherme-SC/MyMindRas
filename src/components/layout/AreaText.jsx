import React from 'react';
import './Card.css';

export default function AreaText(props){
    
    function notificar(){
        alert('Repita esta frase: "É não me atormente nunca mais!"');
    }

    return(
        <div>
            <form action="/" className="FormTexto">
                <textarea  className="Texto" >
                   Digite tudo o quê te aflige e descarte essas preocupações...
                </textarea>
                <input type="submit" value="Desabafar" className="inputHome" onClick={notificar}> 
               
                </input>
            </form>
        </div>
    );
}