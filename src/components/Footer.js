import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={darkMode ? 'dark-footer' : ''}>
      <div className="top-footer-section">
        <div className="contact-left-footer">
          {/* Use conditional rendering for the logo */}
          <img src={darkMode ? 'dir/images/logo-white.png' : 'dir/images/logo.png'} alt="logo" />
          <h1 className={darkMode ? 'dark-text' : ''}><i className="fa-solid fa-envelope"></i> help@frybix.com</h1>
          <h2 className={darkMode ? 'dark-text' : ''}><i className="fa-solid fa-phone"></i> +1 234 456 678 89</h2>
        </div>
        <div className="quicklinks-mid-footer">
        <span className={`Links-footer-sec ${darkMode ? 'dark-text' : ''}`}>
        <h1 className={darkMode ? 'dark-text' : ''}>links</h1>
        <ul>
          <li className={darkMode ? 'dark-text' : ''}>home</li>
          <li className={darkMode ? 'dark-text' : ''}>about us</li>
          <li className={darkMode ? 'dark-text' : ''}>bookings</li>
          <li className={darkMode ? 'dark-text' : ''}>blog</li>
        </ul>
      </span>
      
      <span className={`legal-footer-sec ${darkMode ? 'dark-text' : ''}`}>
      <h1 className={darkMode ? 'dark-text' : ''}>legal</h1>
      <ul>
        <li className={darkMode ? 'dark-text' : ''}>terms of use</li>
        <li className={darkMode ? 'dark-text' : ''}>privacy policy</li>
        <li className={darkMode ? 'dark-text' : ''}>cookie policy</li>
      </ul>
    </span>
    
    <span className={`product-footer-sec ${darkMode ? 'dark-text' : ''}`}>
    <h1 className={darkMode ? 'dark-text' : ''}>product</h1>
    <ul>
      <li className={darkMode ? 'dark-text' : ''}>take tour</li>
      <li className={darkMode ? 'dark-text' : ''}>live chat</li>
      <li className={darkMode ? 'dark-text' : ''}>reviews</li>
    </ul>
  </span>
  
        </div>
        <div className={`news-right-footer ${darkMode ? 'dark-text' : ''}`}>
          <h1 className={darkMode ? 'dark-text' : ''}>Newsletter</h1>
          <h2 className={darkMode ? 'dark-text' : ''}>Stay up to date</h2>
          <form>
            <input type="email" required className={`email-input-form ${darkMode ? 'dark-text' : ''}`} placeholder="Type  your  email" />
            <input type="submit" className="submit-btn-form" aria-label="subscribe" value="Subscribe" />
          </form>
        </div>
      </div>
      <div className={`bottom-footer-section ${darkMode ? 'dark-bottom-footer' : ''}`}>
        <div className="half-line"></div>
        {/* Use dark mode text class for the copyright */}
        <h1 className={darkMode ? 'dark-text' : ''}>Copyright 2024 uifry.com all rights reserved</h1>
      </div>
    </footer>
  );
};

export default Footer;
