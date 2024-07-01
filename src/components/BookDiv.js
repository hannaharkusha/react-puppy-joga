import React from "react";
import Dropdown from "./Dropdown";

function BookDiv({options}) {
    return (
        <div className='flex glass space-evenly center book'>
          <Dropdown options={options} />
            <button className='button'>Buy Tickets</button>
        </div>
    )
}

export default BookDiv;