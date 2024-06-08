import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className="switch-mode" onClick={toggleDarkMode} aria-label="Toggle dark mode">
      <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} white-icon`}></i>
    </button>
  );
};

export default ToggleButton;
