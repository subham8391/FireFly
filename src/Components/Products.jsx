import React from 'react'
import ProductCard from './ProductCard'
function Products() {
    return (
        <div className='product-section'>
            <div className="product-container">
                <div className="product-header">
                    <div className="h-bar"></div>
                    <h2>Our Products</h2>
                    <div className="h-bar"></div>
                </div>
                <div className="product-body">
                    <ProductCard />
                </div>
                    <div className="b-bar h-bar"></div>
            </div>

        </div>
    )
}

export default Products