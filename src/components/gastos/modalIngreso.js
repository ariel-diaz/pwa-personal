import React, {useState} from 'react';
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
          <Modal className="modal-ingreso" 
          isOpen={showModal}
          contentLabel="Minimal Modal Example">
          <form onSubmit={handleSubmit} className="modal-form">  
            <label> <h3> Ingreso </h3>
                <input type="text" value={ingreso} onChange={handleChange} />
            </label>
            <button type="submit" value="guardar"> Guardar </button>
          </form>
         </Modal>
        </>
        )

}


export default ModalIngreso;