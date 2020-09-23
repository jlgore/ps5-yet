import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <img src={logo} className="PS5-logo" alt="logo" />
    </div>
  );
}

export default Header;