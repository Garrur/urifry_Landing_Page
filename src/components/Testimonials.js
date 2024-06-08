import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Testimonials = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`testinomail-section-bottom ${darkMode ? 'dark' : ''}`}>
      <div className="head-testinomial">
        <small data-aos="fade-down">testimonial</small>
        <h1 data-aos="fade-up" className={darkMode ? 'dark-text' : ''}>
          what our users<br />say about us?
        </h1>
      </div>
      <div className="body-testimonial">
        <div className="img-testinomail">
          <img src="dir/images/testin.png" alt="testimonial" />
        </div>
        <div className="body-text-testinomial-user" data-aos="fade">
          <h1 className={darkMode ? 'dark-text' : ''}>the best financial accounting app ever!</h1>
          <p className={darkMode ? 'dark-text' : ''}>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
          </p>
          <img src="dir/images/avatar.png" alt="avatar" />
          <h2 className={darkMode ? 'dark-text' : ''}>nick joans</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
