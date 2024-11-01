import React, { useEffect, useState } from "react";
import './Account.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const Account = (props) => {
    const [userInfo, setUserInfo] = useState(null);

    const decodeToken = (token) => {
        try {
          const decoded = jwtDecode(token);
          return decoded.sub; 
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      };

    useEffect(() => {
      const fetchUserInfo = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const username = decodeToken(token);
            if(username){
                try {
                    const response = await axios.get(`http://localhost:8082/api/user?username=${username}`, {
                    //   headers: {
                    //     'Authorization': `Bearer ${token}`
                    //   }
                    });
                    setUserInfo(response.data);
                  } catch (error) {
                    console.error('Error fetching user info:', error);
                  }
            }
        }
      };
  
      fetchUserInfo();
    }, []);
  
    return (
      <div className="account">
        {userInfo ? (
          <div className="user-info">
            <h2>User Information</h2>
            <p><strong>Username:</strong> {userInfo.username}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Role:</strong> {userInfo.role}</p>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
    );
  }