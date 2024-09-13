import React from "react";
import './MachineCreate.css';
import machineScreen from '../Assets/machine_1.png';

export const MachineCreate = () => {
    return (
        <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={machineScreen} alt="" style={{width: '30vw'}}/>
            </div>
            {/* <div className="productdisplay-img">
                <img src={machine.machine.image} alt="" className="productdisplay-main-img" />
            </div> */}
        </div>
        <div className="productdisplay-right">
           <div>RAM</div>
           <div>CPU</div>
           <div>MEMORY</div>
        </div>
   </div>
    );
}