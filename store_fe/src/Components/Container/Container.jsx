import React from "react";
import './Container.css';
import { Link } from 'react-router-dom';


// Container nay la show ra tat ca cac Container dang co trong store
export const Container = (props) => {
    
    return (
        <div className="item">
            <Link to={`/container/${props.id}`}><img src={props.image} alt="" style={{width: '30vw'}}/></Link>
            <div style={{margin: '10px 0'}}><span className="title">NAME : </span><span>{props.name}</span></div>
            <div style={{margin: '10px 0'}}><span className="title">PORT: </span><span>{props.port}</span></div>
            <div style={{margin: '10px 0'}}><span className="title">RAM: </span> <span className="item-price-new">
                    {props.ram}
                </span></div>
            <div style={{margin: '10px 0'}}><span className="title">CPU : </span><span className="item-price-new">
                {props.cpu}
                </span></div>
            <div style={{margin: '10px 0'}}><span className="title">Start date : </span><span>{props.created}</span></div>
            <div style={{margin: '10px 0'}}><span className="title">Expired: </span><span>{props.expired}</span></div>
            <div style={{margin: '10px 0'}}><span className="title">Status:</span><span>{props.status}</span></div>
                
        </div>
    );
}