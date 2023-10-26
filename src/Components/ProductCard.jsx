import React from 'react'
import { productCards } from '../data'
function ProductCard() {
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
                            <button className='pq-view'>Quick View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard