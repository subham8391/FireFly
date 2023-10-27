import React from 'react'
import Carousel from '../Components/Carousel'
import { AiOutlineClose } from "react-icons/ai";
import { GiFlexibleStar } from "react-icons/gi";
function ProductDetails({ isOpen, closeModal }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-content-img"><Carousel /></div>
                
                <div className="modal-content-details">
                    <div className="mcd-content"> 
                     <p style={{fontSize:'30px'}}>Raju Rassibomb</p>
                     <button className="close-btn" onClick={closeModal}>
                        <AiOutlineClose />
                    </button>
                    </div>
                    <p>MRP:</p>
                    <h2 style={{fontSize:'20px'}}>Raju`s Dreams /-</h2>
                    <div className="dotted-line"></div>
                    <div className="p-desc">
                        <h3 style={{fontSize:'18px'}}>Product Description:</h3>
                        <p>This product packs an extra punch, thanks to literal blood,</p>
                        <p>sweat and tears of a young boy.</p>
                    </div>
                    <div className="dotted-line"></div>
                    <div className="p-con">
                        <h3 style={{fontSize:'18px'}}>Product Contents:</h3>
                        <p><GiFlexibleStar className='p-con-icon'/> 10 hand-hyrting pieces of rassi bombs</p>
                        <p><GiFlexibleStar className='p-con-icon'/> Jilled with great pain</p>
                        <p><GiFlexibleStar className='p-con-icon'/> Raju`s hopes</p>
                    </div>
                    <div className="dotted-line"></div>
                    <div className="p-ship">
                        <h3 style={{fontSize:'18px'}}>Shipping Time:</h3>
                        <p>Before Raju understands his dreams do not matter.</p>
                    </div>
                    <button className='pq-view' >Choose Now</button>
                </div>
                
            </div>
        </div>
    );
}

export default ProductDetails


