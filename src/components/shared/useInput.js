import React, {useState} from 'react'


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

   const handleChange = (e) => {
        setValue(e.target.value);
    };

    const clear = () => {
        setValue('');
    }
    
    return {
        value,
        onChange: handleChange,
        clear
    }

};

export default useInput;