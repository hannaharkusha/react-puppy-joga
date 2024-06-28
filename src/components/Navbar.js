import React from "react";


function Navbar(){
    return(
        <div className='flex center'>
            <div className='logo'><span>.paws</span>itive</div>
            <div className='flex center navbar'>
                <div className='links flex center'>
                    <div>About</div>
                    <div>Effects</div>
                    <div>Tickets</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar