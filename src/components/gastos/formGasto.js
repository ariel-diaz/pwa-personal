
import React  from 'react';
import useInput from '../shared/useInput';


const FormGasto = ({addItem}) => {
    const titulo = useInput('');
    const gasto = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            "id": 3,
            "titulo": titulo.value,
            "costo": gasto.value,
            "fecha": new Date()
        }
        addItem(item);
        titulo.clear('');
        gasto.clear(0);
    };

    return (
        <form className="form-gastos" onSubmit={handleSubmit}>
         <label className="form-gastos-label">
          Título:
          <input placeholder="ingresar titulo" type="text" {...titulo} />
        </label>
        <label className="form-gastos-label">
          Gasto:
          <input placeholder="ingresar $" type="number" {...gasto} min="1"  />
        </label>
        <input className="form-gastos-input" type="submit" value="Agregar" disabled={titulo.value.length < 1 || gasto.value < 1} />
         </form>
    )
}

export default FormGasto;
