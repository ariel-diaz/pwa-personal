import React, { useState, useEffect } from 'react'
import dateFns from 'date-fns';
import useGastosState from './useGastosState';
import Modal from 'react-modal';


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
        <form className="form-gastos" onSubmit={handleSubmit}>
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


const ModalIngreso = ({ingreso, updateIngreso}) => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false)
    };

    const handleChange = (e) => {
        updateIngreso(e.target.value);
    }

    return (
        <>
          <h3 onClick={() => setShowModal(true)}>
           <b> Ingreso </b>
            ${ingreso}
          </h3>
          <Modal 
          isOpen={showModal}
          contentLabel="Minimal Modal Example">

          <button className="button-cerrar" onClick={() => setShowModal(false)}>Cerrar</button>

          <form onSubmit={handleSubmit}>  
            <label> Ingreso
                <input type="text" value={ingreso} onChange={handleChange} />
            </label>
            <button type="submit" value="guardar"> Guardar </button>
          </form>
         </Modal>
        </>
        )

}

const Gastos = () => {
    // const initialIngreso = Number(window.localStorage.getItem('initialIngreso')) || 0;
     const initialList = JSON.parse(window.localStorage.getItem('initialList')) || [];


    const {list, addItem, removeItem, ingreso, gasto, saldo, updateIngreso } = useGastosState(initialList);


    useEffect(() => {
        localStorage.setItem('initialList', JSON.stringify(list))
    });

    return (
        <div className="container">
            <div className="gastos-detail">
                 <ModalIngreso ingreso={ingreso} updateIngreso={updateIngreso}/>
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
            {/* <ButtonAdd /> */}
        </div>
    )

};

export default Gastos;