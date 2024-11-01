import React, { useContext, useEffect, useState, useRef } from 'react';
import { NewsLetter } from '../NewsLetter/NewsLetter';
import Slider from "react-slick";
import {Container} from '../Container/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ContainerList.css';
import axios from 'axios';
const addicon = require('../Assets/add.png');
const left_arrow = require('../Assets/left-arrow.png');
const right_arrow = require('../Assets/right-arrow.png');
export const ContainerList = (props) => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // Tắt mũi tên mặc định
    };
    const [myAllMachine, setMyAllMachine] = useState([]);

    useEffect(() => {
        const fetchContainers = async () => {
            try {
                const response = await axios.get("http://localhost:8082/admin/container/list", {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (Array.isArray(response.data.data)) {
                    const filteredMyData = response.data.data;
                    setMyAllMachine(filteredMyData);
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

        fetchContainers();
    }, []);
    return (
        <div>
            <div className='popular'>
                <h2>Containers</h2>
                <div className="popular-item">
                    <div className="slider-container">
                        <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}><img src={left_arrow}></img></button>
                        <Slider ref={sliderRef} {...settings}>
                            {myAllMachine.map((machine, i) => (
                                <div key={i}>
                                    <Container
                                        id={machine.id}
                                        name={machine.container_name}
                                        port={machine.port}
                                        ram={machine.ram}
                                        cpu={machine.cpu}
                                        created={machine.created}
                                        expired={machine.expired}
                                        status={machine.status}
                                        image = {machine.img_src}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <button className="next-button" onClick={() => sliderRef.current.slickNext()}><img src={right_arrow}></img></button>
                    </div>
                    <hr className='lineHR' />
                </div>
            </div>
            <div>
                <NewsLetter />
            </div>
        </div>
    );
};