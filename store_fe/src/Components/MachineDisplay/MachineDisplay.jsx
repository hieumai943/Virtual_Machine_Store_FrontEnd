import React from "react";
import './MachineDisplay.css';

export const MachineDisplay = (props) => {
    const machine = props; // Directly assign props to product
    console.log("Product:", machine);
    return (
       <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={machine.machine.image} alt="" style={{width: '30vw'}}/>
                </div>
                {/* <div className="productdisplay-img">
                    <img src={machine.machine.image} alt="" className="productdisplay-main-img" />
                </div> */}
            </div>
            <div className="productdisplay-right">
                <h1>{machine.name}</h1>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${machine.machine.old_price}</div>
                    <div className="productdisplay-right-price-new">${machine.machine.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    day la 1 virtual machine su dung he dieu hanh linux, da duoc cai dat cac phan mem can thiet, co ban nhu la: file manager, text editor, note,...
                </div>
                <button>ADD TO CART</button>
            </div>
       </div>
    );
}