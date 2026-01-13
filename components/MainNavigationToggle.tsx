'use client'
import { useState } from 'react'

function MainNavigationToggle() {
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);

  return (
    <div className={`toggle-container ${isNavMenuActive? 'active' : ''}`}>
      <button className='nav-toggle' onClick={() => setIsNavMenuActive(prev => !prev)}>
        <span className={`button-line ${isNavMenuActive? 'active' : ''}`}></span>
        <span className={`button-line ${isNavMenuActive? 'active' : ''}`}></span>
        <span className={`button-line ${isNavMenuActive? 'active' : ''}`}></span>
      </button>
    </div>
  )
}

export default MainNavigationToggle