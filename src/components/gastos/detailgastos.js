import React, {useState} from 'react';
import useGastosState from './useGastosState';

import Modal from 'react-modal';

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



const DetailGastos = () => {
    const {ingreso, gasto, saldo, updateIngreso } = useGastosState();

    return (
        <div className="gastos-detail">
            <ModalIngreso ingreso={ingreso} updateIngreso={updateIngreso}/>
            <h3> <b> Gastos </b> ${gasto} </h3>
            <h3> <b> Saldo </b>  ${saldo} </h3>
      </div>
    )
}

export default DetailGastos;