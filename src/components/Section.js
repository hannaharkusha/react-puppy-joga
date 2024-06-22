import React from "react";

function Section({question, content, reverse}) {
    return (
        <div className={ reverse===true ? 'about flex space-between center column reverse' : 'about flex space-between center column ' }>
            <div className='question'>{question}</div>
            <div className='content'>{content}</div>
        </div>
    )
}

export default Section;