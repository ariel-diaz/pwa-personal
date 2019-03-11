import React from 'react'
import  {format}  from 'date-fns';
import es from 'date-fns/locale/es';

const NotaItem = ({ nota, removeNota, handleChangeEstado }) => {
    return (
        <li className="item-nota" style={{ 'backgroundColor': nota.color, 'padding': 10, 'color': '#fff' }}>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'flexGrow': 3 }}>
                <span> {nota.estado ? <strike className="strike-nota"> {nota.titulo} </strike> : nota.titulo}  </span>
                <span> {format(new Date(nota.fecha), 'DD MMMM', {locale: es})} </span>
            </div>
            <div className="item-div">
                   <input type="checkbox" className="item-checkbox"
                    checked={nota.estado} onChange={handleChangeEstado} />
                   <span className="btnDeleteObjetivo" onClick={removeNota} > <b> X  </b> </span>
            </div>


        </li>
    )
}

export default NotaItem;