import React from "react";


function Navbar(){
    return(
        <div className='flex center navbar'>
            <div className='links flex center'>
                <div>O nas</div>
                <div>Korzyści</div>
                <div>Zasady</div>
                <div>Kontakt</div>
            </div>
            <div className='text-right'>
                <button className = 'button'>Book</button>
            </div>
        </div>
    )
}

export default Navbar