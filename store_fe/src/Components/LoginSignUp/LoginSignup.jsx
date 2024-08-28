import React, { useEffect, useState } from 'react';
import './LoginSignup.css';
const user_icon = require('../Assets/person.png');
const email_icon = require('../Assets/email.png');
const password_icon = require('../Assets/password.png');

export const LoginSignup = () => {
    const[action, setAction] = useState("Sign up");
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
          <div className='inputs'>
            {action==="Login"? <div></div> :<div className='input'>
              <img src={user_icon} alt='User Icon'></img>
              <input type="text" placeholder="Name"></input>
            </div>  }
            <div className="input">
              <img src={user_icon} alt='User Icon'></img>
              <input type="text" placeholder="Username"></input>
            </div>
            <div className="input">
              <img src={email_icon} alt='Email Icon'></img>
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="input">
              <img src={password_icon} alt='Password Icon'></img>
              <input type="password" placeholder="Password"></input>
            </div>
            {action==="Sign up"?<div></div>:<div className='forgot-password'>Forgot password?
                <span>   Click here?</span>
            </div>}
          </div>
          <div className='submmit-container'>
            <div className={action === "Login"?"submit gray": "submit" } onClick={() => {setAction("Login")}}>Sign up</div>
            <div className={action === "Sign up"?"submit gray": "submit"} onClick={() => {setAction("Sign up")}}>Login</div>
          </div>
        </div>
      </div>
  );
};