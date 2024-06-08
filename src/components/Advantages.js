import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Advantages = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={`mid-sub-main-section ${darkMode ? 'dark' : ''}`}>
        <div className="left-text-mid-sub-main-section">
          <span className="mid-top-heading-sub">
            <small data-aos="fade">advantages</small>
            <h1 data-aos="fade" className={darkMode ? 'dark-text' : ''}>Why Choose Uifry?</h1>
            <h2 data-aos="fade" className={darkMode ? 'dark-text' : ''}>
              <i className="fa-solid fa-bell"></i>Clever Notifications
            </h2>
            <p data-aos="fade" className={darkMode ? 'dark-text' : ''}>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
              In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
              et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
              sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
              suspendisse aliquam.
            </p>
          </span>
        </div>
        <div className="mid-right-img-sub-main-section">
          <img
            src="dir/images/specs3.png"
            className="specs1"
            alt="Illustration of Clever Notifications feature"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
      </div>

      <div className={`mid-sub-main-section ${darkMode ? 'dark' : ''}`}>
        <div className="right-img-sub-main-section">
          <img
            src="dir/images/specs2.png"
            className="specs1"
            alt="Illustration of Fully Customizable feature"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
        <div className="left-text-sub-main-section">
          <span className="mid-top-heading-sub">
            <h2 data-aos="fade" className={darkMode ? 'dark-text' : ''}>
              <i className="fa-solid fa-star"></i>Fully Customizable
            </h2>
            <p data-aos="fade" className={darkMode ? 'dark-text' : ''}>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
              In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
              et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
              sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
              suspendisse aliquam.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Advantages;
