import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useParams, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";

const paymentImg = require('../Assets/QR.jpeg');

export const Payment = () => {
    const { machineId } = useParams();
    const [coreCpu, setCoreCpu] = useState(null);
    const [memory, setMemory] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    const [port, setPort] = useState(null);
    const handleConfirmClick = () => {
        setShowModal(true);
    };
    useEffect(() => {
        const storedCoreCpu = localStorage.getItem('coreCpu');
        const storedMemory = localStorage.getItem('memory');
        setCoreCpu(storedCoreCpu);
        setMemory(storedMemory + 'G');
    }, []);
    const handleCloseModal = () => {
        setShowModal(false);
        setIsAccountCreated(false);
    };
    console.log("Core CPU:", coreCpu); // Kiểm tra giá trị của coreCpu
    console.log("Memory:", memory); // Kiểm tra giá trị của memory
    const handleSubmit = async () => {
        try {
                // Gọi API thứ hai
                const response = await axios.post("http://localhost:8082/shop/change-auth", {
                username,
                password,
                machineId,
            });
            console.log("API response:", response.data);
            const matchUser = response.data.match("username đã tồn tại");
            if (matchUser) {
                alert("Username đã tồn tại");
                setIsAccountCreated(false);
                return;
            }
            else{
                const portRegex = /port using:(\d+)/;
                const match = response.data.match(portRegex);
                let extractedPort = match[1];
                setPort(extractedPort);
                await new Promise(resolve => setTimeout(resolve, 500));
    
                const payload = {
                    cpu_limit: coreCpu,
                    memory_limit: memory,
                    port: extractedPort,
                }
                const response2 = await axios.put("http://localhost:8082/shop/docker-compose/update", payload);
                console.log("API response2:", response2.data);
                setIsAccountCreated(true);
            }
        } catch (error) {
            console.error("API request failed:", error);
        }
    };
    // 

    return (
        <div>
            <div className="payment">
                <img src={paymentImg} alt="" />
            </div>
            <div className="pay">
                <Link to={`/machine/${machineId}`}><button>Back</button></Link>
                <button onClick={handleConfirmClick}>Confirm</button>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        {isAccountCreated ? (
                            <div>
                                <h3>Bạn đã tạo tài khoản thành công</h3>
                                <p>Đường link dẫn đến trang web của bạn là: <a href={`http://localhost:${port}`}>localhost:{port}</a></p>
                            </div>
                        ) : (<div>
                            <h3>Create account to log in virtual machine</h3>
                            <input type="text" placeholder="Username" value={username} className="input-field" onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} className="input-field" onChange={(e) => setPassword(e.target.value)} />
                            <button className="submit-button" onClick={handleSubmit}>Submit</button>
                        </div>)}

                    </div>
                </div>
            )}

        </div>
    );
}