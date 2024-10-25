import React, { useEffect, useState } from 'react';
import './Navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const cart_icon = require('../Assets/cart_icon.png');
const logo = require('../Assets/hieuhieu.jpg');


export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
    <Link to={"/"}><div className="nav-logo"><img src={logo}></img></div></Link>
    <ul className="nav-menu">
        <li 
            className={menu === "shop" ? "active" : ""}
            onClick={() => setMenu("shop")}
        >
            <Link style={{ textDecoration: 'none' }} to='/'>HOME</Link>
        </li>
        <li 
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
        >
            <Link style={{ textDecoration: 'none' }} to='/home'>REVIEW</Link>
        </li>
        <li 
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu("contact")}
        >
            <Link style={{ textDecoration: 'none' }} to='/contact'>CONTACT</Link>
        </li>
    </ul>
    <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
        {/* <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon}></img></Link> */}
        {/* <div className='nav-cart-count'>0</div> */}
    </div>
</div>
  );
};