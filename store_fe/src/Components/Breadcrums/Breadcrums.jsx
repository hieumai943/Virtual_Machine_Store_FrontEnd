import React from "react";
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
export const BreadCrums = (props) => {
    const machine = {props};
    return (
       <div className="breadcrum">
        HOME<img src={arrow_icon} alt=">"/>MACHINE<img src={arrow_icon} alt=">"/>{machine.name}
       </div>
    );
}