import React from "react";


function Navbar(){
    return(
        <div className='flex center navbar'>
            <div className='links flex center'>
                <div>About</div>
                <div>Effects</div>
                <div>Terms</div>
                <div>Contact</div>
            </div>
            <div className='text-right'>
                <button className = 'button'>Book a Class</button>
            </div>
        </div>
    )
}

export default Navbar