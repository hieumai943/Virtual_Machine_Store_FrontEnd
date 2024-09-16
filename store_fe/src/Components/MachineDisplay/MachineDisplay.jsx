import React from "react";
import './MachineDisplay.css';

export const MachineDisplay = (props) => {
    return (
       <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img src={props.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{props.name}</h1>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${props.oldPrice}</div>
                    <div className="productdisplay-right-price-new">${props.newPrice}</div>
                </div>
                <div className="productdisplay-right-description">
                {props.description}
                </div>
                <button>ADD TO CART</button>
            </div>
       </div>
    );
}