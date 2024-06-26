import React, { useState, useEffect } from 'react';
import Button from './button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
        <div className='navbar-container'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        Memento Omnius
        </Link>

        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home
        </Link>
        </li>

        <li className='nav-item'>
        <Link
        to='/contact'
        className='nav-links'
        onClick={closeMobileMenu}
        >
        Contact
        </Link>
        </li>

        <li className='nav-item'>
        <Link
        to='/learn'
        className='nav-links'
        onClick={closeMobileMenu}
        >
        Learn
        </Link>
        </li>

        <li className='nav-item'>
        <Link
        to='/about'
        className='nav-links'
        onClick={closeMobileMenu}
        >
        About 
        </Link>
        </li>

        <li>
        <Link
        to='/train'
        className='nav-links-mobile'
        onClick={closeMobileMenu}
        >
        Train
        </Link>
        </li>

        </ul>
        {button && <Button buttonTo='/train' buttonStyle='btn--outline'>Train</Button>}
        </div>
        </nav>
        </>
    );
}

export default Navbar;
