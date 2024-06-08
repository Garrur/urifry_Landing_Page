import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ToggleButton from "./ToggleButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo-nav">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i
            className={`fa-solid fa-bars ${
              darkMode ? "white-icon" : "black-icon"
            }`}
          ></i>
        </button>

        <img
          src={darkMode ? "dir/images/logo-white.png" : "dir/images/logo.png"}
          alt="uiFry Logo"
          className="logo-nav-img"
        />
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark white-icon"></i>
        </button>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
      </ul>
      <ToggleButton />
      <button className={`nav-button ${darkMode ? "dark-text" : ""}`}>
        Download
      </button>
    </nav>
  );
};

export default NavBar;
