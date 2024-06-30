import React, { useContext } from "react";
import { DataContext } from '../App';  // Import the context from App

function AdvGroup() {
    const { advantages } = useContext(DataContext);  // Use the context

    return (
        <div className='flex column advantages'>
            <div className='adv-title'>Pawsitive effects</div>
            {advantages.map((adv, index) => (
                <div className=" adv-container flex center glass">
                    <img src={adv[2]} alt="icon"/>
                    <div className='advantage grow' key={index}>
                        <div>{adv[0]}</div>
                        <div>{adv[1]}</div>
                    </div>
                </div>
    )
)}
</div>
)
    ;
}

export default AdvGroup;
