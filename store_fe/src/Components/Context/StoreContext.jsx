import React, {createContext} from 'react';
import {all_machine} from '../Assets/all_machine';
export const StoreContext = createContext();

export const StoreProvider = (props) =>{
    const contextValue = {all_machine};
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}   