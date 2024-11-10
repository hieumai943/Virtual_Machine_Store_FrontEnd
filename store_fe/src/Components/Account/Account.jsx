import React, { useEffect, useState } from "react";
import './Account.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';

export const Account = (props) => {
    const [userInfo, setUserInfo] = useState(null);
  const [myAllMachine, setMyAllMachine] = useState([]);
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
                    const machineResponse = await axios.get(`http://localhost:8082/shop/machine/list?username=${username}`, {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });
                    if (Array.isArray(machineResponse.data.data) ) {
                      const filteredMyData = machineResponse.data.data.filter(machine => machine.status);
            
                      setMyAllMachine(filteredMyData);
                    } else {
                      console.error('API response is not an array:', machineResponse.data.data);
                    }
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
          {myAllMachine.length > 0 ? (
            myAllMachine.map((machine, index) => (
              <div key={index}>
                 <div className="item">
                    <Link to={`http://localhost:${machine.port}`}><img src={machine.imgSrc} alt="" style={{width: '30vw'}}/></Link>
                    <div style={{margin: '10px 0'}}><span className="title">NAME : </span><span>{machine.name}</span></div>
                    <div style={{margin: '10px 0'}}><span className="title">DESCRIPTION: </span><span>{machine.description}</span></div>
                    <div style={{margin: '10px 0'}}><span className="title">OLD PRICE: </span> <span className="item-price-old">
                            {machine.oldPrice}
                        </span></div>
                    <div style={{margin: '10px 0'}}><span className="title">NEW PRICE : </span><span className="item-price-new">
                        {machine.newPrice}
                        </span></div>
                 </div>
              </div>
            ))
          ) : (
            <div>You haven't buy any machines</div>
          )}
        </div>
      </div>
    </div>
    );
  }