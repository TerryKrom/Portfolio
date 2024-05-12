import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h2>TerryKrom</h2>
            </div>
            <nav className="nav-links">
                <a href={'#'}>Home</a>
                <a href={'#' }>Projetos</a>
                <a href={'#'}>Habilidades</a>
                <a href={'#'}>Sobre</a>
            </nav>
        </header>
    );
}

export default Header;