import React from "react";
import './Machine.css';
import { Link } from 'react-router-dom';
// machine nay la show ra tat ca cac machine dang co trong store
export const Machine = (props) => {
    return (
        <div className="item">
            <Link to={`/machine/${props.id}`}><img src={props.image} alt="" style={{width: '30vw'}}/></Link>
            
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="item-price-old">
                {props.old_price}
                </div>
            </div>
        </div>
    );
}