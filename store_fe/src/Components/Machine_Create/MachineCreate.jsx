import React, { memo, useState } from 'react';
import './MachineCreate.css';
import axios from 'axios';
import machineScreen from '../Assets/machine_1.png';

export const MachineCreate = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ram, setRam] = useState('');
  const [cpu, setCpu] = useState('');
  const [memory, setMemory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { name, description, ram, cpu, memory };
    
    try {
        const response = await axios.post('http://localhost:8080/machine/create', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log('API response:', response.data);
        // Xử lý phản hồi thành công ở đây (ví dụ: hiển thị thông báo thành công)
      } catch (error) {
        if (error.response) {
          // Yêu cầu được thực hiện và máy chủ trả về mã trạng thái
          // nằm ngoài phạm vi 2xx
          console.error('API request failed:', error.response.data);
          // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi)
        } else if (error.request) {
          // Yêu cầu được thực hiện nhưng không nhận được phản hồi
          console.error('No response received:', error.request);
          // Xử lý lỗi mạng ở đây
        } else {
          // Có lỗi xảy ra khi thiết lập yêu cầu
          console.error('Error:', error.message);
          // Xử lý các lỗi khác ở đây
        }
      }
    };
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={machineScreen} alt="" style={{width: '30vw'}}/>
                </div>
            </div>
            <div className="productdisplay-right">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">NAME:</label>
                        <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">DESCRIPTION:</label>
                        <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="ram">RAM:</label>
                        <input 
                            type="text"
                            id="ram"
                            value={ram}
                            onChange={(e) => setRam(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="cpu">CORE CPU:</label>
                        <input
                        type="text"
                        id="cpu"
                        value={cpu}
                        onChange={(e) => setCpu(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="memory">MEMORY:</label>
                        <input
                        type="text"
                        id="memory"
                        value={memory}
                        onChange={(e) => setMemory(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" >
                    </button>
                </form>
            </div>
        </div>
    );
};