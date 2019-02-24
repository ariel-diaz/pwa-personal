import React, { useState, useEffect } from 'react'
import useGastosState from './useGastosState';
import Modal from 'react-modal';
import FormGasto from './formGasto';
import ItemGasto from './itemGasto';



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