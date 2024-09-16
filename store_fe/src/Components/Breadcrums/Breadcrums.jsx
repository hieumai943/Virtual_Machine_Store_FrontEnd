import React from "react";
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
export const BreadCrums = (props) => {
    console.log(props);
    return (
       <div className="breadcrum">
        HOME<img src={arrow_icon} alt=">" style={{ marginLeft: '10px' }}/>MACHINE<img src={arrow_icon} alt=">"/>{props.name}
       </div>
    );
}