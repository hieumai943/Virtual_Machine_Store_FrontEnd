import React from 'react';
import './Footer.css';

const footer_logo = require('../Assets/xpra.png') 
const instagram_logo = require('../Assets/instagram_icon.png') 
const linkedln_logo = require('../Assets/linkedin.png') 
const whatsapp_logo = require('../Assets/whatsapp_icon.png') 

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <span>Virtual machine store</span>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Hieu</li>
                <li>Store</li>
                <li>About</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_logo} alt="" />
                </div>
                <div className="footer-icons-container">
                <img style={{ width: '1.5vw' }} src={linkedln_logo} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img  src={whatsapp_logo} alt="" />
                </div>
            </div>
        </div>
    )
};