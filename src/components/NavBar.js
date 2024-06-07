import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav>
      <div className="logo-nav">
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <img
          src={darkMode ? 'dir/images/logo-white.png' : 'dir/images/logo.png'}
          alt="uiFry Logo"
          className="logo-nav-img"
        />
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Features</a></li>
      </ul>
      <button className="switch-mode" onClick={toggleDarkMode}>
        <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>
      <button className="nav-button">Download</button>
    </nav>
  );
};

export default NavBar;
