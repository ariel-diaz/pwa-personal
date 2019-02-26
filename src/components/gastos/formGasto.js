
import React , {useState} from 'react';


const FormGasto = ({addItem}) => {
    const titulo = useInputForm('');
    const gasto = useInputForm('');

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

const useInputForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);

   const handleChange = (e) => {
        setValue(e.target.value);
    };

    const clear = () => {
        setValue('');
    }
    
    return {
        value,
        onChange: handleChange,
        clear
    }

};

export default FormGasto;
