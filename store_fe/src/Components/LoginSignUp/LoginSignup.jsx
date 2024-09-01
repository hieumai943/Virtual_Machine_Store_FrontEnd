import React, { useEffect, useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';
const user_icon = require('../Assets/person.png');
const email_icon = require('../Assets/email.png');
const password_icon = require('../Assets/password.png');

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");
  const handleSignUp = () => {
    // Collect form data
    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const username = document.querySelector('input[placeholder="Username"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    // Create request payload
    const payload = {
      firstName,
      lastName,
      username,
      email,
      password
    };

    // Send POST request to the API
    axios.post('http://localhost:8080/register',
      payload,
      {

        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(data => {
        console.log('Success:', data.data);
        // Handle success (e.g., redirect to login page, show success message, etc.)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show error message)
      });
  };
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === "Login" ? <div></div> : <div className='input'>
            <img src={user_icon} alt='User Icon'></img>
            <input type="text" placeholder="First Name"></input>
          </div>}
          {action === "Login" ? <div></div> : <div className='input'>
            <img src={user_icon} alt='User Icon'></img>
            <input type="text" placeholder="Last Name"></input>
          </div>}
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
          {action === "Sign up" ? <div></div> : <div className='forgot-password'>Forgot password?
            <span>   Click here?</span>
          </div>}
        </div>
        <div className='submmit-container'>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Login"); handleSignUp(); }}>Sign up</div>
          <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up"); }}>Login</div>
        </div>
      </div>
    </div>
  );
};