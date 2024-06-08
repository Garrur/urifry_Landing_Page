import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="main-head-section">
      <div className="left-text-heading-section">
        <img className="blur-head-first" src="dir/images/blur1.png" alt="" />
        <h1 data-aos="fade-up" className={darkMode ? "dark-text" : ""}>
          make the best financial decisions
        </h1>
        <p data-aos="fade-up" className={darkMode ? "dark-text" : ""}>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <span
          className={`button-head-section ${
            darkMode ? "dark-button-section" : ""
          }`}
          data-aos="fade-up"
        >
        <button className={`Started-btn ${darkMode ? "dark-button" : ""}`}>
        <span className={darkMode ? 'dark-text' : ''}>get started</span>{" "}
        <i className={`fa-solid fa-arrow-right white-icon`}></i>
      </button>
      
      <button className={`Video-btn ${darkMode ? "dark-button" : ""}`}>
        <i className={`fa-solid fa-circle-play white-icon`}></i>{" "}
        <span className={darkMode ? 'dark-text' : ''}> watch video</span>
      </button>
      
        </span>

        <span className="img-left-strap">
          <img src="dir/images/vnag-strap.png" alt="" />
        </span>
      </div>
      <div
        className="right-img-heading-section"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <img src="dir/images/mobile-op.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
