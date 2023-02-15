import React from 'react';
import { NavLink } from 'react-router-dom';
import '../header/header.css'
import logo from '../../assets/red_logo.svg'

const Header = () => {
    const currentRoute = window.location.pathname;
    console.log(currentRoute)
    return (
        <div className='header'>
            <img src={logo} alt='kasa logo' className='logo' />
            <nav>
                <ul className='nav_list'>
                    {/* Création des Link de navigation et définition du NavLink actif pour mise en forme spécifique */}
                    <li>
                        <NavLink className={(nav) => (nav.isActive) ? 'nav_list_active' : 'nav_list_item'} to="/home">Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(nav) => (nav.isActive) ? 'nav_list_active' : 'nav_list_item'} to="/about">A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;