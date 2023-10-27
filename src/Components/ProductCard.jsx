import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import { productCards } from '../data'
function ProductCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    return (
        <div className='product-card-section'>
            <div className="product-card-container">
                {productCards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="card-img">
                            <img src={card.iSrc} alt="Card" />
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <button className='pq-view' onClick={openModal}>Quick View</button>
                        </div>
                    </div>
                ))}
            </div>
            <ProductDetails isOpen={isModalOpen} closeModal={closeModal}/>
        </div>
    )
}

export default ProductCard