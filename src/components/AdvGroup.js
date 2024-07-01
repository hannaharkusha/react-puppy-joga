import React, { useContext } from "react";
import { DataContext } from '../App';  // Import the context from App
import dog from './dog2.jpg';


function AdvGroup() {
    const { advantages } = useContext(DataContext);  // Use the context

    return (
        <div className='flex center overlay'>
            <div className='flex column advantages glass'>
                {advantages.map((adv, index) => (
                        <div className=" adv-container flex center">
                            <img src={adv[2]} alt="icon"/>
                            <div className='advantage' key={index}>
                                <div className='adv-header'>{adv[0]}</div>
                                <div>{adv[1]}</div>
                            </div>
                        </div>
                    )
                )}
            </div>
            <div>
                <img className='dog' src={dog} alt="dog"/>
            </div>
        </div>
    )
}

export default AdvGroup;
