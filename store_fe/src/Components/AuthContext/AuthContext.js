import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const payload = {
        username,
        password
      };

  // Send POST request to the API
  axios.post(`http://localhost:8082/login`,
    payload,
    {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(data => {
      localStorage.setItem('token', data.data.token);
      setUser({ username, role: data.data.role });
      // Handle success (e.g., redirect to login page, show success message, etc.)
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error (e.g., show error message)
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);