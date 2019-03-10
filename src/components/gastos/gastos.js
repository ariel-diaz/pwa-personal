import React from 'react'
import useGastosDetail from './useGastosState';
import FormGasto from './formGasto';
import ItemGasto from './itemGasto';
import DetailGastos from './detalleGasto';
import Accordion from '../shared/accordion';

const Gastos = () => {
    const {ingreso, gasto, saldo, updateIngreso ,list, addItem, removeItem } = useGastosDetail();

    let props = { ingreso, gasto, saldo, updateIngreso}

    return (
        <div className="container">
           <DetailGastos {...props}/>
           
           <Accordion>
               <FormGasto addItem={addItem} />
           </Accordion>
            <div className="gastos-list">
                <ul>
                    {list.length > 0
                        ? list.map((item, i) => <ItemGasto removeItem={removeItem} item={item} id={i} key={i} />)
                        : <h3> No hay gastos </h3>
                    }
                </ul>
            </div>
        </div>
    )

};



export default Gastos;