import React, { useEffect, useState } from 'react';
import './Navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const cart_icon = require('../Assets/cart_icon.png');


export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">Logo</div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")} ><Link style={{textDecoration: 'none'}}to= '/'>Shop</Link>{menu == "shop"? <hr/>:<></>}</li>
        <li onClick={() => setMenu("home")}><Link  style={{textDecoration: 'none'}} to= '/home'>Home</Link>{menu == "home"? <hr/>:<></>}</li>
        <li onClick={() => setMenu("contact")}><Link  style={{textDecoration: 'none'}} to= '/contact'>Contact</Link>{menu == "contact"? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link  style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link  style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon}></img></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};