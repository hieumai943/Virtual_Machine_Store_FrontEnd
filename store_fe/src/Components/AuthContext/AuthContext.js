import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    checkAuthStatus();
  }, []);
  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.sub;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
            console.log('User info:', token);
            if (token) {
        // Thêm token vào header của tất cả requests
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const username = decodeToken(token);
        if (username) {
          try {
            const response = await axios.get(`http://localhost:8082/api/user?username=${username}`, {
              //   headers: {
              //     'Authorization': `Bearer ${token}`
              //   }
            });
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching user info:', error);
          }
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    delete axios.defaults.headers.common['Authorization'];
    
    const payload = {
      username,
      password
    };

    try {
      setLoading(true);

      // Send POST request to the API
      const response = await axios.post(`http://localhost:8082/login`, payload, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const data = response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('username', username);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      // Fetch user details
      const userResponse = await axios.get(`http://localhost:8082/api/user?username=${username}`, {
        // headers: {
        //   'Authorization': `Bearer ${data.token}`
        // }
      });

      setUser(userResponse.data);
      localStorage.setItem('user_id', userResponse.data.id);
      setLoading(false);
      return userResponse.data; // Trả về dữ liệu người dùng

    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      throw error; // Ném lỗi để xử lý bên ngoài
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };
  const value = {
    user,
    login,
    logout,
    loading
  };
 
  return (
    <AuthContext.Provider value={value }>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);