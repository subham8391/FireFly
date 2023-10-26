import React from 'react'
import { headerContent } from '../data'
function Header() {
  return (
    <div className="header-section">
      <div className="header-container">
        {headerContent.map((headding, index) => (
          <h1 key={index}>{headding}</h1>
        ))}
        <button className='hq-view'>Quick View</button>
      </div>
    </div>

  )
}

export default Header