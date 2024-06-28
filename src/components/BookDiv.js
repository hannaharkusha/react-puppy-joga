import React from "react";

function BookDiv() {
    return (
        <div className='flex center book'>
            <select name="event" id="event"></select>
            <select name="date" id="date"></select>
            <button className='button'>Confirm</button>
        </div>
    )
}

export default BookDiv;