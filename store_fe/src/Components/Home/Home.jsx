import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { Machine } from '../Machine/Machine';
import { all_machine } from '../Assets/all_machine';
import { NewsLetter } from '../NewsLetter/NewsLetter';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import axios from 'axios';
const addicon = require('../Assets/add.png');
  export const Home = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [myAllMachine, setMyAllMachine] = useState([]);
  const [sampleMachine, setSampleMachine] = useState([]);

  useEffect(() => {
  const fetchMachines = async () => {
      try {
        const response = await axios.get("http://localhost:8082/machine/list", {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (Array.isArray(response.data.data) ) {
          const filteredMyData = response.data.data.filter(machine => !machine.isSample);
          const filteredSampleData = response.data.data.filter(machine => machine.isSample);
          setMyAllMachine(filteredMyData);
          setSampleMachine(filteredSampleData);
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
      <Slider {...settings}>
        {myAllMachine .map((machine, i) => (
          <div key={i}>
            <Machine
              id={machine.id}
              name={machine.name}
              description={machine.description}
              image={machine.imgSrc}
              oldPrice={machine.oldPrice}
              newPrice={machine.newPrice}
            />
          </div>
        ))}
      </Slider>
    </div>
      </div>
      <div className='popular'>
        <h2>Sample machines</h2>
        <hr />
        <div className="popular-item">
        <Slider {...settings}>
        {sampleMachine .map((machine, i) => (
          <div key={i}>
            <Machine
              id={machine.id}
              name={machine.name}
              description={machine.description}
              image={machine.imgSrc}
              oldPrice={machine.oldPrice}
              newPrice={machine.newPrice}
            />
          </div>
        ))}
      </Slider>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};