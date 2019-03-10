import React, { useState, useEffect } from 'react'
import useInput from './../shared/useInput';



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


const Objetivo = ({ item, handleChange, id, deleteItem }) => {

    const porcentaje = (item.items.filter(x => x === true).length / item.items.length ) *  100;

    return (
        <li className="item-objetivo">
            <div>
                <h3> <b> {item.title} </b></h3>
                {item.items.map((checkbox, i) => <input className="checkObjetivo" type="checkbox" key={i} checked={checkbox} onChange={(e) => handleChange(id, e.target.checked, i)} />)}
            </div>
            <div>
                <span onClick={deleteItem}> <b> X  </b></span>
                <h1> <strong>{ porcentaje.toFixed(2) }</strong>% </h1> 
            </div>
        </li>
    )
}


const FormObjetivo = ({ addItem }) => {
    const title = useInput('');
    const items = useInput('')


    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(title.value, items.value);
        title.clear(String.empty);
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


export default Objetivos;