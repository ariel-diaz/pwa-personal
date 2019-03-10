import React from 'react'

const Objetivo = ({ item, handleChange, id, deleteItem }) => {

    const porcentaje = (item.items.filter(x => x === true).length / item.items.length ) *  100;

    return (
        <li className="item-objetivo">
            <div className="div-checks">
                <h3> <b> {item.title} </b></h3>
                <div>
{item.items.map((checkbox, i) => <input className="checkObjetivo" type="checkbox" key={i} checked={checkbox} onChange={(e) => handleChange(id, e.target.checked, i)} />)}
                </div>
            </div>
            <div class="div-percent">
                <span className="btnDeleteObjetivo" onClick={deleteItem}> <b> X  </b></span>
                <h1> <strong>{ porcentaje.toFixed(2) }</strong>% </h1> 
            </div>
        </li>
    )
}


export default Objetivo;
