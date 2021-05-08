import React from 'react';
import './Card.css'

export default function FraseEfeito(props){
    return(<div>
        <h1 className="Frases">{props.children}</h1>
    </div>)
}