
import React from 'react'
import useInput from '../shared/useInput';

const FormObjetivo = ({ addItem }) => {
    const title = useInput('');
    const items = useInput('')


    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(title.value, items.value);
        title.clear('');
        items.clear(0);
        
    }


    return (
        <form onSubmit={handleSubmit} className="formObjetivos">
            <input type="text" {...title} placeholder="titulo" />
            <input type="number" min="1" max="10" {...items} placeholder="cantidad" />
            <button className="form-gastos-input" type="submit" disabled={title.value === '' || items.value < 1}>  Add </button>
        </form>
    )

}

export default FormObjetivo;
