import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


function Dropdown({options}) {

    const[dropdownToggled, setDropdownToggled] = useState(false)

    return (
        <div className={dropdownToggled ? 'flex column glass dropdown' : 'flex column glass  dropdown not-toggled'} onClick={()=>setDropdownToggled(!dropdownToggled)}>
            <div className="flex center space-between">
                <div className="dropdown-title"> Choose event</div>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {dropdownToggled &&
                (<div className="dropdown-options glass">
                {options.map(option => (
                    <div>{option}</div>
                ))}
                </div>)
            }
        </div>
    )
}

export default Dropdown;