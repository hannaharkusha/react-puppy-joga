import React, { useContext } from "react";
import Advantage from "./Advantage";
import { DataContext } from '../App';  // Import the context from App

function AdvGroup() {
    const { advantages } = useContext(DataContext);  // Use the context

    return (
        <div className='flex center advantages'>
            <div className='adv-question'>Why should I go?</div>
            {advantages.map((adv, index) => (
               <div><Advantage
                    key={index}  // Add a key prop for each element
                    title={adv[0]}
                    advantage={adv[1]}
               /></div>
            ))}
        </div>
    );
}

export default AdvGroup;
