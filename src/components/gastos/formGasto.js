
import React , {useState} from 'react';


const FormGasto = ({addItem}) => {
    const [titulo, setTitulo] = useState('');
    const [gasto, setGasto] = useState('');

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
         <label className="form-gastos-label">
          Título:
          <input placeholder="ingresar titulo" type="text" value={titulo} onChange={handleTitulo} />
        </label>
        <label className="form-gastos-label">
          Gasto:
          <input placeholder="ingresar $" type="text" value={gasto} onChange={handleGasto} />
        </label>
        <input className="form-gastos-input" type="submit" value="Agregar" />
          </form>
    )
}

export default FormGasto;
