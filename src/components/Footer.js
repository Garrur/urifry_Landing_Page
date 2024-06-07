import React from 'react';

const Footer = () => (
  <footer>
    <div className="top-footer-section">
      <div className="contact-left-footer">
        <img src="dir/images/logo.png" alt="logo"/>
        <h1><i className="fa-solid fa-envelope"></i> help@frybix.com</h1>
        <h2><i className="fa-solid fa-phone"></i> +1 234 456 678 89</h2>
      </div>
      <div className="quicklinks-mid-footer">
        <span className="Links-footer-sec">
          <h1>links</h1>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>bookings</li>
            <li>blog</li>
          </ul>
        </span>
        <span className="legal-footer-sec">
          <h1>legal</h1>
          <ul>
            <li>terms of use</li>
            <li>privacy policy</li>
            <li>cookie policy</li>
          </ul>
        </span>
        <span className="product-footer-sec">
          <h1>product</h1>
          <ul>
            <li>take tour</li>
            <li>live chat</li>
            <li>reviews</li>
          </ul>
        </span>
      </div>
      <div className="news-right-footer">
        <h1>Newsletter</h1>
        <h2>Stay up to date</h2>
        <form>
          <input type="email" required className="email-input-form" placeholder="Type  your  email"/>
          <input type="submit" className="submit-btn-form" aria-label="subscribe" value="Subscribe"/>
        </form>
      </div>
    </div>
    <div className="bottom-footer-section">
      <div className="half-line"></div>
      <h1>Copyright 2024 uifry.com all rights reserved</h1>
    </div>
  </footer>
);

export default Footer;
