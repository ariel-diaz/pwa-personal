import React, { useState, useEffect } from 'react'
import FormNota from './formNota';
import NotaItem from './itemNota';
import Accordion from '../shared/accordion';


const Notas = () => {
    const initialNotas = JSON.parse(localStorage.getItem('initialNotas')) || [];
    const [notas, setNotas] = useState(initialNotas);


    const addNotas = (nota) => {
        const newNotas = [...notas, nota];
        setNotas(newNotas);
    }

    const removeNota = (index) => {
        const newNotas = notas.filter((_, i) => i !== index);
        setNotas(newNotas);
    }

    const handleChangeEstado = (i) => {
        const newList = notas.slice();
        newList[i].estado = !newList[i].estado;
        setNotas(newList);
    }

    useEffect(() => {
        localStorage.setItem('initialNotas', JSON.stringify(notas));
    }, [notas]);

    return (
        <div className="container">
            <Accordion>
              <FormNota addNotas={addNotas} />
            </Accordion>
            <ul>
                {notas.map((nota, i) => <NotaItem
                    removeNota={() => removeNota(i)}
                    handleChangeEstado={() => handleChangeEstado(i)}
                    nota={nota}
                    key={i} />)}
            </ul>
        </div>
    )

};




export default Notas;