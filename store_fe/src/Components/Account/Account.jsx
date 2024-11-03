import React, { useEffect, useState } from "react";
import './Account.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const Account = (props) => {
    const [userInfo, setUserInfo] = useState(null);
    const machines = [{
      "id": 1,
      "name": "Machine 1",
      "type": "Type 1",
      "status": "Active"
    }]
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
      <div className="columns">
        {userInfo ? (
          <div className="user-info">
            <h2>User Information</h2>
            <p><strong>Full name:</strong> {`${userInfo.firstName} ${userInfo.lastName}`}</p>
            <p><strong>Username:</strong> {userInfo.username}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Role:</strong> {userInfo.role}</p>
          </div>
        ) : (
          <div>Loading user information...</div>
        )}
        <div className="machine-info">
          <h2>Machine Information</h2>
          {machines.length > 0 ? (
            machines.map((machine, index) => (
              <div key={index}>
                <p><strong>Machine Name:</strong> {machine.name}</p>
                <p><strong>Machine Type:</strong> {machine.type}</p>
                <p><strong>Status:</strong> {machine.status}</p>
              </div>
            ))
          ) : (
            <div>Loading machine information...</div>
          )}
        </div>
      </div>
    </div>
    );
  }