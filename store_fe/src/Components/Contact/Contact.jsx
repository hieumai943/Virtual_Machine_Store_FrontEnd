import React from 'react';
import './Contact.css';


export const Contact = (props) => {
    return (
        <div className="container">
      <h1 className="titlecontact">Contact with us</h1>
      <div className="contactInfo">
        <div className="contactItem">
          <h2>Phone</h2>
          <p>+84 827259403</p>
        </div>
        <div className="contactItem">
          <h2>Facebook</h2>
          <a href="https://www.facebook.com/hieu.nguyenmai.18" target="_blank" rel="noopener noreferrer">
            facebook.com/vmstore
          </a>
        </div>
        <div className="contactItem">
          <h2>Zalo</h2>
          <p>Zalo ID: 14567</p>
        </div>
        <div className="contactItem">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/hieumai943/" target="_blank" rel="noopener noreferrer">
            linkedin.com/vmstore
          </a>
        </div>
      </div>
    </div>
    );
}