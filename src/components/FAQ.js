import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const FAQ = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`faq-section ${darkMode ? 'dark' : ''}`}>
      <div className={`head-faq ${darkMode ? 'dark-text' : ''}`}>
        <small>FAQ</small>
        <h1 className={darkMode ? 'dark-text' : ''}>Frequently Asked Questions</h1>
      </div>
      <div className="body-faq-sec">
        <div className="faq-sub-top">
          <span className={`faq-color-back ${darkMode ? 'dark-text' : ''}`}>
            <h1>the best financial accounting app ever!</h1>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </span>
          <span className={`faq-no-back ${darkMode ? 'dark-text' : ''}`}>
            <h1>the best financial accounting app ever!</h1>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </span>
        </div>
        <div className="faq-sub-mid">
          <span className={`faq-no-back ${darkMode ? 'dark-text' : ''}`}>
            <h1>the best financial accounting app ever!</h1>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </span>
          <span className={`faq-color-back ${darkMode ? 'dark-text' : ''}`}>
            <h1>the best financial accounting app ever!</h1>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </span>
        </div>
        <div className="faq-sub-top">
          <span className={`faq-color-back ${darkMode ? 'dark-text' : ''}`}>
            <h1>the best financial accounting app ever!</h1>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </span>
          <span className={`faq-no-back ${darkMode ? 'dark-text' : ''}`}>
            <h1>the best financial accounting app ever!</h1>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
