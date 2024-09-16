import React from "react";
import './Machine.css';
import { Link } from 'react-router-dom';
// machine nay la show ra tat ca cac machine dang co trong store
export const Machine = (props) => {
    return (
        <div className="item">
            <Link to={`/machine/${props.id}`}><img src={props.image} alt="" style={{width: '30vw'}}/></Link>
            <div style={{margin: '10px 0'}}><span className="title">NAME : </span><span>{props.name}</span></div>
            <div style={{margin: '10px 0'}}><span className="title">DESCRIPTION: </span><span>{props.description}</span></div>
            <div style={{margin: '10px 0'}}><span className="title">OLD PRICE: </span> <span className="item-price-old">
                    {props.oldPrice}
                </span></div>
            <div style={{margin: '10px 0'}}><span className="title">NEW PRICE : </span><span className="item-price-new">
                {props.newPrice}
                </span></div>
        </div>
    );
}