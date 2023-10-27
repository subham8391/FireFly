import React from 'react'
import img3 from '../image/img-3.png'
import { AiOutlineInstagram,AiFillYoutube,AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook,BiLogoLinkedin} from "react-icons/bi";
function Footer() {
  return (
    <div className="footer-section">
      <div className="f-bar"></div>
      <div className="footer-container">
        <img src={img3} alt="img3" />
        <div className="footer-content">
          <h3 className="fc-top">Follow us on</h3>
          <div className="fc-bottom">
            <div className="s-icon"><AiOutlineInstagram/></div>
            <div className="s-icon"><AiFillYoutube/></div>
            <div className="s-icon"><AiOutlineTwitter /></div>
            <div className="s-icon"><BiLogoFacebook /></div>
            <div className="s-icon"><BiLogoLinkedin /></div>
          </div>
        </div>
        <img src={img3} alt="img3" />
      </div>
      <div className="f-bar"></div>
    </div>
  )
}

export default Footer