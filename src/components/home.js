import React from 'react'
import useGastosDetail from './gastos/useGastosState';
import DetailGastos from './gastos/detalleGasto';
import RecordatoriosPendientes from './notas/pendientes';

const Home = () => {
    const {ingreso, gasto, saldo, updateIngreso} = useGastosDetail();

    let props = {ingreso, gasto, saldo, updateIngreso};
    return (
        <div className="container">
           <DetailGastos {...props}  />

           <hr />

           <RecordatoriosPendientes />
        </div>
    )
}

export default Home;