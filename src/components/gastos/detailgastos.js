import React from 'react'
import ModalIngreso from './modalIngreso';


const DetailGastos = ({ingreso, gasto, saldo, updateIngreso}) => {
    let props = {
        ingreso, 
        updateIngreso
    }
    return (
        <div className="gastos-detail">
            <ModalIngreso {...props}/>
            <h3> <b> Gastos </b> ${gasto} </h3>
            <h3> <b> Saldo </b>  ${saldo} </h3>
      </div>
    )
}

export default DetailGastos;