import React from 'react';
import logo from '../../assets/icons/logo.png';
import burgerButton from '../../assets/icons/burger-button.svg';

function Header() {
    return ( 
        <header className="header">
            <figure className="logo">
                <img src={logo} />
            </figure>
            <figure className="burger-btn">
                <img  src={burgerButton} />
            </figure>
        </header>
    );
}

export  {Header};
