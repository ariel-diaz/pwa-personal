import React, {useEffect} from 'react'
import DetailGastos from './gastos/detailGastos';
import useGastosDetail from './gastos/useGastosState';

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