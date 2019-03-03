import React from 'react';


const RecordatoriosPendientes = () => {
    
    const recordatorios = JSON.parse(localStorage.getItem('initialNotas')) || [];
    const cantidadPendientes = recordatorios.filter(r => r.estado == false);

    return (
        <div className="box-recordatorios">
            <p> Recordatorios: ({cantidadPendientes.length})</p>
        </div>
    )
}


export default RecordatoriosPendientes;