import React from 'react';
import img4 from '../image/img-4.png';
import {aboutContent} from '../data'
function About() {
    return (
        <div className='about-section'>
            <div className="about-container">
                <div className="about-header">
                    <div className="h-bar"></div>
                    <h2>About</h2>
                    <div className="h-bar"></div>
                </div>
                <div className="about-body">
                    <img src={img4} alt="" />
                    <div className="about-content">
                        {aboutContent.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <h4>The choice is yours. Because they don't have one.</h4>
                    </div>
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About