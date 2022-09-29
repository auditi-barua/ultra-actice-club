import React from 'react';
import logo from'../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-part'>
            <img src= {logo} alt=''/>
            <div>
            <h1>Daily activities</h1>
            </div>
            <nav className='nav'>
                <a href='home'>Home</a>
                <a href='about'>About</a>
                <a href='contact'>Contact</a>
            </nav>
           
        </div>
    );
};

export default Header;