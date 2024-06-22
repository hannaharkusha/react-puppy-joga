import React from "react";
import mats from './mats.jpg';

function Terms() {
    return (
        <div className='flex space-between terms center'>
            <ul>
                <li>Always be gentle and calm around the puppies to ensure their safety and comfort.</li>
                <li>Do not feed the puppies any human food during the session.</li>
                <li>Let the puppies come to you; avoid chasing or forcing interactions with them.</li>
                <li>Ensure all personal belongings are secure and out of reach of the puppies to prevent them from chewing on them.</li>
                <li>Report any signs of distress or health concerns in the puppies to the instructor immediately.</li>
            </ul>
            <img src={mats} alt="dog"/>
        </div>
    );
}

export default Terms;
