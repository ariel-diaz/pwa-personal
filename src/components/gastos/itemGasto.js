import React from 'react';
import dateFns from 'date-fns';

const ItemGasto = ({item, removeItem, id}) => {
    return <li className="item-gasto">
        <div className="item-gasto-detail">
            <span> {item.titulo}</span>
            <span> {dateFns.format(item.fecha, 'D MMMM')} </span>
        </div>
        <div className="item-gasto-costo">
            <h1> <b> ${item.costo} </b> </h1>
        </div>
        <div className="item-gasto-action">
            <span> edit </span>
            <span onClick={() => removeItem(id)}> X </span>
        </div>
    </li>
};


export default ItemGasto;