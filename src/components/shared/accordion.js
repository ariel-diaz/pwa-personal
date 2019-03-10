
import React, {useState} from 'react'

const accordion = ({children}) => {
    const [active, setActive] = useState(false);

    const handleChange = () => {
        const newActive = !active;
        setActive(newActive);

    }

    return (
        <div>
            <span className="accordion-tab" onClick={handleChange}> 
                <span className="symbol-tab"> {active ? 'Reducir -' : 'Expandir +'} </span> 
            </span>
            <div className="content" >
              {active ? 
                children
                : ''}
            </div>
        </div>
    )
}


export default accordion;

