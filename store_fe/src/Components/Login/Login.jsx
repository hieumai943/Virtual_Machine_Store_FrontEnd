import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const user_icon = require('../Assets/person.png');
const email_icon = require('../Assets/email.png');
const password_icon = require('../Assets/password.png');

export const Login = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    // Collect form data
    const   username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    await login(username, password);

    // Create request payload
    setTimeout(() => {
      console.log("User role:", user.role);
      let count = 0;
      const checkUserInterval = setInterval(() => {
        count++;
        if (count > 10) {
          clearInterval(checkUserInterval);
          console.error('User role is not available');
        }
        if (user && user.role) {
          clearInterval(checkUserInterval); // Clear the interval
          if (user.role === 'ADMIN') {
            navigate('/admin/container/list');
          } else {
            navigate('/');
          }
        } else {
          console.error('User role is not available');
        }
      }, 500); // Check every 500 milliseconds
    }, 1000);
  };
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='text'>Login</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>


          <div className="input">
            <img src={user_icon} alt='User Icon'></img>
            <input type="username" placeholder="Username"></input>
          </div>
          <div className="input">
            <img src={password_icon} alt='Password Icon'></img>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className='forgot-password'>Forgot password?
            <span>   Click here?</span>
          </div>
        </div>
        <div className='submmit-container'>
          <div className="submit" onClick={() => { handleLogIn(); }}>Login</div>
        </div>
        <div className='register'>You haven't had an account yet?
        <Link to='/register'><span >   Register here?</span></Link>
          </div>
      </div>
    </div>
  );
};