import React from 'react';
import logo from'../../images/logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className='header-part'>
            <img src= {logo} alt=''/>
            <h1><span>Y</span>oga</h1>
            
            <nav className='nav'>
                <a href='home'><span>Home</span></a>
                <a href='about'>About</a>
                <a href='contact'>Contact</a>
                <a href='services'>Services</a>
            </nav>
          
           
        </div>
    );
};

export default Header;