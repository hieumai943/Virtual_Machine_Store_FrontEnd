import React from "react";
import './MachineDetail.css';
import { all_machine } from '../Assets/all_machine';
import { useParams } from 'react-router-dom';
import { BreadCrums } from '../Breadcrums/Breadcrums';
import { MachineDisplay } from "../MachineDisplay/MachineDisplay";

export const MachineDetail = () => {
    const {machineId} = useParams();
    const machine = all_machine.find((machine) => machine.id === parseInt(machineId)); // Ensure machineId is an integer
    return (
        <div>
            <BreadCrums machine = {machine}/>
            <MachineDisplay machine = {machine}/>
        </div>
    );
}