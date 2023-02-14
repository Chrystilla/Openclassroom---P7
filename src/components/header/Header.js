import React from 'react';
import { Link } from 'react-router-dom';
import '../header/header.css'
import logo from '../../assets/red_logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='kasa logo' className='logo' />
            <nav>
                <ul>
                    {/* Création des Link de navigation */}
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;