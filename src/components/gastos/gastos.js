import React, { useState, useEffect } from 'react'
import useGastosState from './useGastosState';
import FormGasto from './formGasto';
import ItemGasto from './itemGasto';
import DetailGastos from './detailgastos';



const Gastos = () => {
   
  
    //  ingreso, gasto, saldo, updateIngreso

    const {list, addItem, removeItem } = useGastosState();


    useEffect(() => {
        localStorage.setItem('initialList', JSON.stringify(list))
    });

    return (
        <div className="container">
            <DetailGastos/>
           <FormGasto addItem={addItem} />
            <div className="gastos-list">
                <ul>
                    {list.length > 0
                        ? list.map((item, i) => <ItemGasto removeItem={removeItem} item={item} id={i} key={i} />)
                        : <h3> No hay gastos </h3>
                    }
                </ul>
            </div>
            {/* <ButtonAdd /> */}
        </div>
    )

};



export default Gastos;