import React from 'react';
import './Card.css';
import NavBar from './NavBar';
import AreaText from './AreaText';
import Meditacao from './Meditacao';
import FraseEfeito from './FraseEfeito';
import Yoga from './Yoga';
import Artigo from './Artigo';
import Musica from './Musica';



export default function Main(props){
    return(
        <div className="Main">
            <div className="Nav">
                <NavBar></NavBar>
                <Yoga />
                <Artigo />
                <Musica />
            </div>
            <div className="Feed">
                <FraseEfeito>
                    Meu Refugio Mental
                </FraseEfeito>
                <AreaText></AreaText>
                <Meditacao />
                <FraseEfeito>
                    O verdadeiro vencedor é aqule que se vence
                </FraseEfeito>
            </div>
        </div>
    )
}