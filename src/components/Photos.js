import React from "react";
import dog1 from './dog1.jpg';
import dog2 from './dog2.jpg';
import dog3 from './dog3.jpg';
import dog4 from './dog4.jpg';
import dog5 from './dog5.jpg';
import dog6 from './dog6.jpg';
import dog7 from './dog7.jpg';
import dog8 from './dog8.jpg';
import LazyLoad from 'react-lazyload';

function Photos() {
    return (
        <div className='flex photos center'>
            <div className='photo'>
                <LazyLoad>
                    <img src={dog5} alt="dog5"/>
                </LazyLoad>
            </div>
            <div className='photo flex column'>
                <LazyLoad>
                    <img src={dog4} alt="dog4"/>
                </LazyLoad>
            </div>
            <div className='photo'>
                <LazyLoad>
                    <img src={dog2} alt="dog2"/>
                </LazyLoad>
                <LazyLoad>
                    <img src={dog6} alt="dog6"/>
                </LazyLoad>
            </div>
            <div className='photo flex column'>
                <LazyLoad>
                    <img src={dog8} alt="dog8"/>
                </LazyLoad>
            </div>
            <div className='photo'>
                <LazyLoad>
                    <img src={dog3} alt="dog3"/>
                </LazyLoad>
            </div>
        </div>
    );
}

export default Photos;
