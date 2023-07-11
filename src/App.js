import React, { useState } from 'react';
import './App.css';

function App() {
  const [DarkMode, setDarkMode] = useState();

  const ThemeChange = () => {
    setDarkMode(!DarkMode);
  };

  return (
    <div className={`app ${DarkMode ? 'dark' : 'light'}`}>
      <button onClick={ThemeChange} className="btn">
        Switch Theme
      </button>
    </div>
  );
}

export default App;

