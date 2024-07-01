import React, {useState} from "react";

function TicketsDiv() {

    const [formData, setFormData] = useState({});

    const submitForm = () =>{
        console.log(formData);
    }

    return (
        <div className='overlay flex center'>
            <form className='flex column center glass' action={submitForm}>
                <input type="text" placeholder='name'/>
                <input type="email" placeholder='e-mail'/>
                <button className='button large' type='submit'>
                    Payment details
                </button>
            </form>
        </div>
    )
}

export default TicketsDiv;