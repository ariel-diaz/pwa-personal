
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

        if(item.titulo === "" || item.costo === "") {
            return;
        }
        addItem(item);
        titulo.clear();
        gasto.clear();
    };

    return (
        <form className="form-gastos" onSubmit={handleSubmit}>
         <label className="form-gastos-label">
          Título:
          <input placeholder="ingresar titulo" type="text" {...titulo} />
        </label>
        <label className="form-gastos-label">
          Gasto:
          <input placeholder="ingresar $" type="number" {...gasto} />
        </label>
        <input className="form-gastos-input" type="submit" value="Agregar" />
          </form>
    )
}

export default FormGasto;
