import React, { useContext, useEffect, useState, useRef } from 'react';
import { Machine } from '../Machine/Machine';
import { NewsLetter } from '../NewsLetter/NewsLetter';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import axios from 'axios';
const addicon = require('../Assets/add.png');
const left_arrow = require('../Assets/left-arrow.png');
const right_arrow = require('../Assets/right-arrow.png');
  export const Home = (props) => {
    const sliderRef = useRef(null);
    const sliderRef1 = useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Tắt mũi tên mặc định
    
  };
  const [myAllMachine, setMyAllMachine] = useState([]);
  const [sampleMachine, setSampleMachine] = useState([]);

  useEffect(() => {
  const fetchMachines = async () => {
      try {
        const username = localStorage.getItem('username');
        setTimeout(() => {
          localStorage.clear();
        }, 1000 * 60 * 60 * 2);
        const response = await axios.get(`http://localhost:8082/shop/machine/list?username=${username}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (Array.isArray(response.data.data) ) {
          const filteredMyData = response.data.data.filter(machine => !machine.isSample && !machine.status);
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
        <div className="popular-item">
        <div className="slider-container">
            <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}><img src = {left_arrow}></img></button>
            <Slider ref={sliderRef} {...settings}>
                {myAllMachine.map((machine, i) => (
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
            <button className="next-button" onClick={() => sliderRef.current.slickNext()}><img src = {right_arrow}></img></button>
        </div>
        <hr className='lineHR' />
        </div>
      </div>
      <div className='popular'>
        <h2>Sample machines</h2>
        <div className="popular-item">
            <button className="prev-button-1" onClick={() => sliderRef1.current.slickPrev()}><img src = {left_arrow}></img></button>
            <Slider ref={sliderRef1} {...settings}>
                {sampleMachine.map((machine, i) => (
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
            <button className="next-button-1" onClick={() => sliderRef1.current.slickNext()}><img src = {right_arrow}></img></button>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};