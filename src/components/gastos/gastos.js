import React, {useState} from 'react'
import useGastosDetail from './useGastosState';
import FormGasto from './formGasto';
import ItemGasto from './itemGasto';
import DetailGastos from './detalleGasto';
import Accordion from '../shared/accordion';
import NotElement from '../shared/notElements';
import {format, addMonths} from 'date-fns';
import es  from 'date-fns/locale/es';


const FechaSelector = ( {fecha, handleChange}) => {
    return (
        <div className="fechaGastos">
            <span onClick={() => handleChange(-1)}> - </span>
            <span> {format(fecha, 'MMMM YYYY', {locale: es})} </span>
            <span onClick={() => handleChange(1)}> + </span>
        </div>
    )
};


const Gastos = () => {
    const {ingreso, gasto, saldo, updateIngreso ,list, addItem, removeItem } = useGastosDetail();
    let props = { ingreso, gasto, saldo, updateIngreso}

    return (
        <div className="container">

           <DetailGastos {...props}/>
           <Accordion>
               <FormGasto addItem={addItem} />
           </Accordion>
           <hr />
            <div className="gastos-list">
                <ul>
                    {list.length > 0
                        ? list.map((item, i) => <ItemGasto removeItem={removeItem} item={item} id={i} key={i} />)
                        : <NotElement/>
                    }
                </ul>
            </div>
        </div>
    )

};



export default Gastos;