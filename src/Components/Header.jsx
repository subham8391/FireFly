import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import { headerContent } from '../data'
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="header-section">
      <div className="header-container">
        {headerContent.map((headding, index) => (
          <h1 key={index}>{headding}</h1>
        ))}
        <button className='hq-view' onClick={openModal}>Quick View</button>
      </div>
      <ProductDetails isOpen={isModalOpen} closeModal={closeModal}/>
    </div>

  )
}

export default Header