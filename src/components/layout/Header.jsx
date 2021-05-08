import React from 'react';
import './Card.css'

export default function Header(props){
    return(
        <div>
            <header className="Header">
                <a href="/">
                    <img className="Logo" src="./mentes.png" alt="My Mind" title="My Mind"/>
                </a>
            </header>
        </div>
    );
}