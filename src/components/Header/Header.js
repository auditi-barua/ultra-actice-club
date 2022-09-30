import React from 'react';
import logo from'../../images/logo.jpg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-part'>
            <img src= {logo} alt=''/>
            <h1><span>Y</span>oga</h1>   
            <div>
                <a href='home'><span>Home</span></a>
                <a href='about'>About</a>
                <a href='contact'>Contact</a>
                <a href='services'>Services</a>
            </div>
          
           
        </nav>
    );
};

export default Header;