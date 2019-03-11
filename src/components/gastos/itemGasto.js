import React from 'react';
import { format} from 'date-fns';
import es from 'date-fns/locale/es';

const ItemGasto = ({ item, removeItem, id }) => {
    return <li className="item-gasto">
        <div className="item-gasto-detail">
            <span> {item.titulo}</span>
            <span> {format(item.fecha, 'D dddd ', {locale: es})} </span>
        </div>
        <div className="item-gasto-costo">
            <h1> <b> ${item.costo} </b> </h1>
        </div>
        <div className="item-gasto-action">
            <span className="btnDeleteObjetivo" onClick={() => removeItem(id)}> X </span>
        </div>
    </li>
};


export default ItemGasto;