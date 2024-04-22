import React, { useState } from 'react'

import ModeToggle from './ModeToggle'

const Header = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <header className='header'>
      <div className='header-left'></div>

      <h2 className='site-title'>to-do</h2>

      <div className='header-right'>
        <ModeToggle darkMode={darkMode} onClick={toggleDarkMode}/>
      </div>
    </header>
  )
}

export default Header;
