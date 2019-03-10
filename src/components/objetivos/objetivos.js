import React, { useState, useEffect } from 'react'
import Objetivo from './objetivo';
import FormObjetivo from './formObjetivo';


const Objetivos = () => {
    const initialObjetivos = JSON.parse(localStorage.getItem('initialObjetivos')) || [];
    const [objetivos, setObjetivos] = useState(initialObjetivos);

    const addItem = (title, items) => {
        const item = {
            title,
            items: Array(+items).fill(false)
        }
        const newObjetivos = [...objetivos, item]
        setObjetivos(newObjetivos);
    }

    const deleteItem = (id) => {
        const newObjetivos = objetivos.filter((x, i) => i !== id);
        setObjetivos(newObjetivos);
    };

    const checkboxHandleChange = (key, value, id) => {
        const objetivo = objetivos.find((x, i) => i === key);
        objetivo.items[id] = value;
        const newObjetivos = objetivos.slice();
        newObjetivos[key] = objetivo;
        setObjetivos(newObjetivos);
    }

    useEffect(() => {
        localStorage.setItem('initialObjetivos', JSON.stringify(objetivos));
    });

    return (
        <div className="container">
            <FormObjetivo addItem={addItem} />
            <hr />
            <ul>
                {objetivos.map((x, i) =>
                    <Objetivo key={i} item={x} id={i} handleChange={checkboxHandleChange} deleteItem={() => deleteItem(i)} />
                )}
            </ul>
        </div>
    )

};



export default Objetivos;