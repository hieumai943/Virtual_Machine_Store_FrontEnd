import React, { useEffect, useState } from 'react';
import './Navbar.css';
import axios from 'axios';
import { Link, useNavigate , useLocation } from 'react-router-dom';
const cart_icon = require('../Assets/cart_icon.png');
const logo = require('../Assets/hieuhieu.jpg');


export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    const role = localStorage.getItem('role');
    if(token && role === 'ADMIN') {
      setIsAdmin("admin");
    }
    else if(token && role === 'CUSTOMER') {
        setIsAdmin("customer");
    }
    else {
        setIsAdmin("guest");
    }
  }, []);

  const handleLogOut = () => {
    // Xử lý đăng xuất
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/login'); // Điều hướng về trang đăng nhập
    window.location.reload();
  };
  return (
    
    <div className='navbar'>
    <Link to={"/"}><div className="nav-logo"><img src={logo}></img></div></Link>
    <ul className="nav-menu">
         
          {isAdmin != "admin" && (
              <li 
              className={location.pathname === "/" ? "active red-text" : ""}
              onClick={() => setMenu("home")}
          >
              <Link style={{ textDecoration: 'none' }} to='/'>HOME</Link>
          </li>
        
        )}
        {isAdmin ==="customer" && (
            <li 
            className={location.pathname.includes("/store") ? "active red-text" : ""}
            onClick={() => setMenu("shop")}
        >
            <Link style={{ textDecoration: 'none' }} to='/store'>STORE</Link>
        </li>
        
        )}
        {/* {isAdmin ==="customer" && (
           <li 
           className={menu === "contact" ? "active" : ""}
           onClick={() => setMenu("contact")}
       >
           <Link style={{ textDecoration: 'none' }} to='/contact'>REVIEW</Link>
       </li>
        
        )} */}
        {isAdmin ==="customer"  && (
           <li 
           className={location.pathname.includes("/contact") ? "active red-text" : ""}
           onClick={() => setMenu("contact")}
       >
           <Link style={{ textDecoration: 'none' }} to='/contact'>CONTACT</Link>
       </li>
        )}
        {isAdmin ==="customer" && (
             <li 
             className={location.pathname.includes("/account") ? "active red-text" : ""}
             onClick={() => setMenu("container_list")}
         >
             <Link style={{ textDecoration: 'none' }} to='/account'>ACCOUNT</Link>
         </li>
         )}  
         {isAdmin ==="admin" && (
             <li 
             className={menu === "container_list" ? "active" : ""}
             onClick={() => setMenu("container_list")}
         >
             <Link style={{ textDecoration: 'none' }} to='/admin/container/list'>MACHINE MANAGING</Link>
         </li>
         )}    
    </ul>
    <div className="nav-login-cart">
        {isLoggedIn ? (
          <button onClick={handleLogOut}>Logout</button>
        ) : (
          <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
        )}
        {/* <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="Cart" /></Link> */}
        {/* <div className='nav-cart-count'>0</div> */}
      </div>
</div>
  );
};