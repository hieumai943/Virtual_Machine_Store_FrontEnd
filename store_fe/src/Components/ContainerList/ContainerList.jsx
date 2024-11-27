import React, { useContext, useEffect, useState, useRef } from 'react';
import { NewsLetter } from '../NewsLetter/NewsLetter';
import Slider from "react-slick";
import { Container } from '../Container/Container';
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
    const [isEnabled, setIsEnabled] = useState(props.status);
    const [currentPage, setCurrentPage] = useState(1);
    const [vmsPerPage] = useState(6);

    // Tính toán các máy ảo cho trang hiện tại
    const indexOfLastVM = currentPage * vmsPerPage;
    const indexOfFirstVM = indexOfLastVM - vmsPerPage;
    const currentVMs = myAllMachine.slice(indexOfFirstVM, indexOfLastVM);

    // Tính tổng số trang
    const totalPages = Math.ceil(myAllMachine.length / vmsPerPage);

    // Thay đổi trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setIsEnabled(myAllMachine.status);
    }, [myAllMachine.status]);
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
    const handleStatusUpdate = async (id, status) => {
        try {
            //   const response = await axios.post(`http://localhost:8082/api/update-status`, {
            //     id: id,
            //     status: status
            //   }, {
            //     headers: {
            //       'Content-Type': 'application/json'
            //     }
            //   });
            //   console.log('Status updated:', response.data);
            // Cập nhật trạng thái mới trong myAllMachine
            setMyAllMachine(prevMachines =>
                prevMachines.map(machine =>
                    machine.id === id ? { ...machine, status: status } : machine
                )
            );
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };
    return (
        <div>
            <div className="container">
                <h1 className="title">Virtual machine managing</h1>
                <div className="vm-list">
                    {currentVMs.map((vm) => (
                        <div key={vm.id} className="vm-card">
                            <div className="vm-header">
                                <h2 className="vm-name">{vm.container_name}</h2>
                                <span className={`vm-status ${vm.status}`}>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={vm.status}
                                            onChange={() => handleStatusUpdate(vm.id, !vm.status)}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </span>
                            </div>
                            <div className="vm-content">
                                <div className="vm-info">
                                    <span>Port: {vm.port}</span>
                                    <span>Start date: {vm.created}</span>
                                    <span>RAM: {vm.ram} GB</span>
                                    <span>Expired at: {vm.expired}</span>
                                    <span>CPU: {vm.cpu} cores</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="page-button nav-button"
                >
                    Trước
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="page-button nav-button"
                >
                    Sau
                </button>
            </div>
        </div>
    );
};

