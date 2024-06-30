import React from "react";
import Dropdown from "./Dropdown";

function BookDiv({options}) {
    return (
        <div className='flex glass space-evenly center book'>
          <Dropdown options={options} />
            <button className='button'>Confirm</button>
        </div>
    )
}

export default BookDiv;