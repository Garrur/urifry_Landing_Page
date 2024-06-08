import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Features = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`sub-main-section ${darkMode ? 'dark-sub-main-section' : ''}`}>
      <div className="right-img-sub-main-section">
        <img src="dir/images/specs1.png" className="specs1" alt="Specs Image 1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" />
      </div>
      <div className="left-text-sub-main-section">
        <span className="top-heading-sub" data-aos="fade">
          <img src="dir/images/blur4.png" className="blur-right-features" alt="Blur Image" />
          <small className="">Features</small>
          <h1 className={darkMode ? 'dark-text' : ''}>Uifry Premium</h1>
        </span>
        <ul className="features-list-sub">
          <li data-aos="fade-up">
            <h2 className={darkMode ? 'dark-text' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ paddingRight: '10px' }}>
                <path d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg> budgeting intervals
            </h2>
            <p className={darkMode ? 'dark-text' : ''}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </li>
          <li data-aos="fade-up">
            <h2 className={darkMode ? 'dark-text' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ paddingRight: '10px' }}>
                <path d="M12 2.50002V12M12 12L20.5 7.27773M12 12L3.5 7.27773M12 12V21.5M20.5 16.7222L12.777 12.4317C12.4934 12.2741 12.3516 12.1954 12.2015 12.1645C12.0685 12.1377 11.9315 12.1377 11.7985 12.1645C11.6484 12.1954 11.5066 12.2741 11.223 12.4317L3.5 16.7222M20.5 16.7222V7.27773M20.5 16.7222C20.5 17.4317 20.5 18.4317 20.5 19.5C20.5 20.7956 19.4457 21.5 18.5 21.5C17.5543 21.5 16.5 20.7956 16.5 19.5C16.5 18.4317 16.5 17.4317 16.5 16.7222M3.5 16.7222V7.27773M3.5 16.7222C3.5 17.4317 3.5 18.4317 3.5 19.5C3.5 20.7956 4.5543 21.5 5.5 21.5C6.44566 21.5 7.5 20.7956 7.5 19.5C7.5 18.4317 7.5 17.4317 7.5 16.7222" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg> simple overview
            </h2>
            <p className={darkMode ? 'dark-text' : ''}>
              Cum et convallis risus placerat aliquam, nunc. Sceler
              isque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
              </p>
            </li>
            <li data-aos="fade-up">
              <h2 className={darkMode ? 'dark-text' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ paddingRight: '10px' }}>
                  <path d="M19.25 10C19.6642 10 20 10.3358 20 10.75V12.25C20 12.6642 19.6642 13 19.25 13H17.75C17.3358 13 17 12.6642 17 12.25V10.75C17 10.3358 17.3358 10 17.75 10H19.25ZM4 6.25H8C8.41421 6.25 8.75 6.58579 8.75 7V17C8.75 17.4142 8.41421 17.75 8 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17V7C3.25 6.58579 3.58579 6.25 4 6.25ZM4 2.75H10.5C10.9142 2.75 11.25 3.08579 11.25 3.5V20.5C11.25 20.9142 10.9142 21.25 10.5 21.25H4C3.58579 21.25 3.25 20.9142 3.25 20.5V18.75H2.75C1.23122 18.75 0 17.5188 0 16V8C0 6.48122 1.23122 5.25 2.75 5.25H3.25V3.5C3.25 3.08579 3.58579 2.75 4 2.75Z" fill="#FF5555"/>
                </svg> monthly savings
              </h2>
              <p className={darkMode ? 'dark-text' : ''}>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Features;
  