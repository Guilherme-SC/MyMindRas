import React from 'react';


export default function NavBar(props){
    return(
        <div>
            <menu className="MenuNav" title="Configurações" type="toolbar">
                <h3 className="TituloMenu">Menu</h3>
                <a className="Item" href="/">Ajuda</a>
                <a className="Item" href="/">Sobre</a>
                <a className="Item" href="/">Fale Conosco</a>
                <a className="Item" href="/">Tutorial</a>
            </menu>
        </div>
    );
}