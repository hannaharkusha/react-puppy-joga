import React from "react";
import dog1 from './dog1.jpg';
import dog2 from './dog2.jpg';
import dog3 from './dog3.jpg';
import dog4 from './dog4.jpg';
import dog5 from './dog5.jpg';
import dog6 from './dog6.jpg';
import dog7 from './dog7.jpg';
import dog8 from './dog8.jpg';
// import dog9 from './dog9.jpg';
// import dog10 from './dog10.jpg';

function Photos() {
    return (
        <div className='flex photos center'>
            <div className='photo'>
                <img src={dog5} alt="dog1"/>
            </div>
            <div className='photo flex column'>
                <img src={dog4} alt="dog1"/>
            </div>
            <div className='photo'>
                <img src={dog2} alt="dog1"/>
                <img src={dog6} alt="dog1"/>

            </div>
            <div className='photo flex column'>
                <img src={dog8} alt="dog2"/>

            </div>
            <div className='photo'>
                <img src={dog3} alt="dog2"/>
            </div>
        </div>
    );
}

export default Photos;
