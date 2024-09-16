import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { Machine } from '../Machine/Machine';
import { all_machine } from '../Assets/all_machine';
import { NewsLetter } from '../NewsLetter/NewsLetter';
import { Link } from 'react-router-dom';

import './Home.css';
import axios from 'axios';
const addicon = require('../Assets/add.png');
export const Home = (props) => {
  const [myAllMachine, setMyAllMachine] = useState([]);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const response = await axios.get('http://localhost:8080/machine/list', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (Array.isArray(response.data.data)) {
          setMyAllMachine(response.data.data);
        } else {
          console.error('API response is not an array:', response.data.data);
        }
        console.log('API response:', response.data.data);
      } catch (error) {
        if (error.response) {
          console.error('API request failed:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      }
    };

    fetchMachines();
  }, []);
  return (
    <div>
      <div className="createNewVM">
        <img src = {addicon}  />
        <Link to={`/create/machine`}><h2>Create a new VM</h2></Link>
      </div>
      <div className='popular'>
        <h2>Your machines</h2>
        <hr />
        <div className="popular-item">
          {myAllMachine.map((machine, i) => {
            return <Machine key={i} id={machine.id} name={machine.name} description = {machine.description} image={machine.imgSrc}  />
          })}
        </div>
      </div>
      <div className='popular'>
        <h2>Sample machines</h2>
        <hr />
        <div className="popular-item">
          {all_machine.map((machine, i) => {
            return <Machine key={i} id={machine.id} name={machine.name} image={machine.image} new_price={machine.new_price} old_price={machine.old_price} />
          })}
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};