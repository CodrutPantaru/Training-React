import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    const location = useLocation().pathname;
    return (
        <nav>
            <ul>
                <li className={location.indexOf('/alcoholic') > -1 ? 'active' : ''}>
                    <Link to="/alcoholic" >Alcoholic</Link>
                </li>
                <li className={location.indexOf('/non-alcoholic') > -1 ? 'active' : ''}>
                    <Link to="/non-alcoholic">Non-Alcoholic</Link>
                </li>
                <li className={location.indexOf('/ordinary') > -1 ? 'active' : ''}>
                    <Link to="/ordinary">Ordinary</Link>
                </li>
                <li className={location.indexOf('/cocktail-glass') > -1 ? 'active' : ''}>
                    <Link to="/cocktail-glass">Cocktail glass</Link>
                </li>
                <li className={location.indexOf('/champagne-flute') > -1 ? 'active' : ''}>
                    <Link to="/champagne-flute">Champagne flute</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;