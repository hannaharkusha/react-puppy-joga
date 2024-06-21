import React from "react";


function Navbar(){
    return(
        <div className='flex center space-between navbar'>
            <div className='grow logo'>logo</div>
            <div className='links flex space-between center'>
                <div>O nas</div>
                <div>Korzyści</div>
                <div>Zasady</div>
                <div>Kontakt</div>
            </div>
            <div className='grow text-right'>
                <button className = 'button'>Book</button>
            </div>
        </div>
    )
}

export default Navbar