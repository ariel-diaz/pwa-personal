import React, { useState } from 'react'
import useGastosDetail from './gastos/useGastosState';
import RecordatoriosPendientes from './notas/pendientes';


const useObjetivos = () => {
    const initialObjetivos = JSON.parse(localStorage.getItem('initialObjetivos')) || [];
    const [objetivos] = useState(initialObjetivos);

    const cantidadObjetivos = objetivos.length;
    const porcentaje = (item) => {
        return (item.items.filter(x => x === true).length / item.items.length) * 100
    }
    const arrayPorcentajes = objetivos.map(item => porcentaje(item))
    const porcentajeObjetivos = (arrayPorcentajes.reduce((a, b) => a + b) / cantidadObjetivos).toFixed(2);

    return {
        cantidadObjetivos,
        porcentajeObjetivos
    }
}

const Home = () => {
    const { saldo } = useGastosDetail();
    const { cantidadObjetivos, porcentajeObjetivos } = useObjetivos();

    return (
        <div className="container home">
            <div className="data">
                <b> Disponible </b>
                <span>  ${saldo} </span>
            </div>
            <div className="data">
                <RecordatoriosPendientes />
            </div>
            <div className="data objetivosHome">
                <h3> <b> Objetivos </b> </h3>
                <span> {cantidadObjetivos} </span>
                <h1> <b> Porcentaje </b> </h1>
                <span> {porcentajeObjetivos}% </span>
            </div>
        </div>
    )
}

export default Home;