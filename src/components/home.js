import React from 'react'
import useGastosDetail from './gastos/useGastosState';
import DetailGastos from './gastos/detalleGasto';

const Home = () => {
    const {ingreso, gasto, saldo, updateIngreso} = useGastosDetail();

    let props = {ingreso, gasto, saldo, updateIngreso};
    return (
        <div className="container">
           <DetailGastos {...props}  />
        </div>
    )
}

export default Home;