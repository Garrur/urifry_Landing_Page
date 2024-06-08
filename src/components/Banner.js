import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Banner = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`banner-bottom ${darkMode ? 'dark' : ''}`}>
      <div className="textdata-banner">
        <h1 className={darkMode ? 'dark-text' : ''}>ready to get started?</h1>
        <h2 className={darkMode ? 'dark-text' : ''}>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</h2>
        <button className={darkMode ? 'dark-text' : ''}>Download</button>
      </div>
    </div>
  );
};

export default Banner;
