import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { Machine } from '../Machine/Machine';
import { all_machine } from '../Assets/all_machine';
import { NewsLetter } from '../NewsLetter/NewsLetter';
import './Home.css';
import axios from 'axios';
const addicon = require('../Assets/add.png');
export const Home = (props) => {
  return (
    <div>
      <div className="createNewVM">
        <img src = {addicon}  />
        <h2>Create a new VM</h2>
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