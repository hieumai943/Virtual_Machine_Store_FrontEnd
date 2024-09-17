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
            <div className="productdisplay-right" >
                <h1>{props.name}</h1>
                <div style={{margin: '1vh 0'}}><span style={{fontWeight: '600'}}>DESCRIPTION:  </span><span>{props.description}</span></div>
                <div className="productdisplay-right-prices">
                    <div  style={{margin: '1vh 0'}} className="productdisplay-right-price-old"><span style={{fontWeight: '600'}}>OLD PRICE: </span>{props.oldPrice}</div>
                    <div  style={{margin: '1vh 0'}} className="productdisplay-right-price-new"><span style={{fontWeight: '600'}}>NEW PRICE: </span>{props.newPrice}</div>
                </div>
                <div  style={{margin: '1vh 0'}} className="ram"><span style={{fontWeight: '600'}}>RAM:  </span>{props.ram} GB</div>
                <div  style={{margin: '1vh 0'}} className="cpu"><span style={{fontWeight: '600'}}>CPU:  </span>{props.coreCpu} CORE </div>
                <div  style={{margin: '1vh 0'}} className="memory"><span style={{fontWeight: '600'}}>MEMORY:  </span>{props.memory} GB </div>
               
                <button>ADD TO CART</button>
            </div>
       </div>
    );
}