import React from 'react';


const RecordatoriosPendientes = () => {
    
    const recordatorios = JSON.parse(localStorage.getItem('initialNotas')) || [];
    const cantidadPendientes = recordatorios.filter(r => r.estado === false);

    return (
        <div className="box-recordatorios">
            <h3> <b> Recordatorios </b> </h3>
            <span> {cantidadPendientes.length} / {recordatorios.length} </span>
        </div>
    )
}


export default RecordatoriosPendientes;