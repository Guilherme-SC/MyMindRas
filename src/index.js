import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

ReactDOM.render(
    <div>   

        <Header />  
        <Main> </Main>
        <Footer />
    </div>,  
    document.getElementById('root')
);