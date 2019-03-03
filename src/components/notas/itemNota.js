import React from 'react'
import  dateFns  from 'date-fns';

const NotaItem = ({ nota, removeNota, handleChangeEstado }) => {
    return (
        <li className="item-nota" style={{ 'backgroundColor': nota.color, 'padding': 10, 'color': '#fff' }}>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'flexGrow': 3 }}>
                <span> {nota.estado ? <strike className="strike-nota"> {nota.titulo} </strike> : nota.titulo}  </span>
                <span> {dateFns.format(new Date(nota.fecha), 'DD MMMM')} </span>
            </div>
            <div className="item-div">
                   <input type="checkbox" className="item-checkbox"
                    checked={nota.estado} onChange={handleChangeEstado} />
                   <span onClick={removeNota} > X </span>
            </div>


        </li>
    )
}

export default NotaItem;