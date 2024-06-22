import React from "react";



function Advantage({title, advantage, margin}) {
    return (
        <div className='flex column advantage margin' style={{ marginLeft: `${margin}vw` }}>
            <div className='title'>{title}</div>
            <div className='adv-text'>{advantage}</div>
        </div>
    )
}

export default Advantage;