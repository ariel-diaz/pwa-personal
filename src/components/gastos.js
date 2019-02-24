import React, { useState, useEffect } from 'react'
import dateFns from 'date-fns';
import useGastosState from './useGastosState';

const itemsGastos = [
    {
        "id": 1,
        "titulo": "Gym",
        "costo": "1200",
        "fecha": 1550959380823
    },
    {
        "id": 2,
        "titulo": "Tuenti",
        "costo": "250",
        "fecha": 1550959380823
    },
    {
        "id": 3,
        "titulo": "Sube",
        "costo": "500",
        "fecha": 1550959380823
    },
    {
        "id": 1,
        "titulo": "Gym",
        "costo": "1200",
        "fecha": 1550959380823
    },
    {
        "id": 2,
        "titulo": "Tuenti",
        "costo": "250",
        "fecha": 1550959380823
    },
    {
        "id": 3,
        "titulo": "Sube",
        "costo": "500",
        "fecha": 1550959380823
    },
    {
        "id": 1,
        "titulo": "Gym",
        "costo": "1200",
        "fecha": 1550959380823
    },
    {
        "id": 2,
        "titulo": "Tuenti",
        "costo": "250",
        "fecha": 1550959380823
    },
    {
        "id": 3,
        "titulo": "Sube",
        "costo": "500",
        "fecha": 1550959380823
    }
]



const ItemGasto = ({item, removeItem, id}) => {
    return <li className="item-gasto">
        <div className="item-gasto-detail">
            <span> {item.titulo}</span>
            <span> {dateFns.format(item.fecha, 'D MMMM')} </span>
        </div>
        <div className="item-gasto-costo">
            <h1> <b> ${item.costo} </b> </h1>
        </div>
        <div className="item-gasto-action">
            <span> edit </span>
            <span onClick={() => removeItem(id)}> X </span>
        </div>
    </li>
};


const ButtonAdd  = () => {
    return <button className="button-add"> + </button>
}



const FormGasto = ({addItem}) => {
    const [titulo, setTitulo] = useState('');
    const [gasto, setGasto] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            "id": 3,
            "titulo": titulo,
            "costo": gasto,
            "fecha": new Date()
        }
        addItem(item);
        setTitulo('');
        setGasto('');
    };

    const handleTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const handleGasto = (e) => {
        setGasto(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
         <label>
          Titulo
          <input type="text" value={titulo} onChange={handleTitulo} />
        </label>
        <label>
          Gasto:
          <input type="text" value={gasto} onChange={handleGasto} />
        </label>
        <input type="submit" value="Submit" />
          </form>
    )
}


const Gastos = () => {
    // const initialIngreso = Number(window.localStorage.getItem('initialIngreso')) || 0;
     const initialList = JSON.parse(window.localStorage.getItem('initialList')) || [];


    const {list, addItem, removeItem, ingreso, gasto, saldo } = useGastosState(initialList);

    return (
        <div className="container">
            <div className="gastos-detail">
                <h3> <b> Ingresos </b> ${ingreso} </h3>
                <h3> <b> Gastos </b> ${gasto} </h3>
                <h3> <b> Saldo </b>  ${saldo} </h3>
            </div>
           <FormGasto addItem={addItem} />
            <div className="gastos-list">
                <ul>
                    {list.length > 0
                        ? list.map((item, i) => <ItemGasto removeItem={removeItem} item={item} id={i} key={i} />)
                        : <h3> No hay gastos </h3>
                    }
                </ul>
            </div>
            <ButtonAdd />
        </div>
    )

};

export default Gastos;