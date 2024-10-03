import React, { useState } from "react";
import "./Payment.css";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";

const paymentImg = require('../Assets/QR.jpeg');

export const Payment = () => {
    const { machineId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    const handleConfirmClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsAccountCreated(false);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8082/change-auth", {
                username,
                password
            });
            console.log("API response:", response.data);
            // Xử lý phản hồi từ API nếu cần
            setIsAccountCreated(true);
        } catch (error) {
            console.error("API request failed:", error);
            // Xử lý lỗi nếu cần
        }
    };

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
                                <p>Đường link dẫn đến trang web của bạn là: <a href="http://localhost:81">localhost:81</a></p>
                            </div>
                        ) : (<div>
                    <h3>Create account to log in virtual machine</h3>
                    <input type="text" placeholder="Username" value={username} className="input-field" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} className="input-field" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
                        </div>)}
                   
                </div>
            </div>
            )}
        </div>
    );
}