import React, { useContext, useEffect, useState } from 'react';
import './MachineDetail.css';
import { useParams } from 'react-router-dom';
import { BreadCrums } from '../Breadcrums/Breadcrums';
import { MachineDisplay } from "../MachineDisplay/MachineDisplay";
import axios from 'axios';

export const MachineDetail = () => {
    const {machineId} = useParams();
    const [machine, setMachine] = useState(null);
  useEffect(() => {
        const fetchMachines = async () => {
          try {
            const response = await axios.get(`http://localhost:8082/shop/machine/`+machineId, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log('API response detail:', response.data.data);
            setMachine(response.data.data);
          } catch (error) {
            if (error.response) {
              console.error('API request failed:', error.response.data);
            } else if (error.request) {
              console.error('No response received:', error.request);
            } else {
              console.error('Error:', error.message);
            }
          }
        };
    
        fetchMachines();
      }, []);
    return (
        <div>
        {machine ? (
          <>
            <BreadCrums
              name={machine.name}
            />
            <MachineDisplay
              id={machine.id}
              name={machine.name}
              description={machine.description}
              image={machine.imgSrc}
              oldPrice={machine.oldPrice}
              newPrice={machine.newPrice}
              ram={machine.ram}
              coreCpu={machine.coreCpu}
              memory={machine.memory}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}