import React, { useState, useEffect } from 'react'
import dateFns from 'date-fns';
import useInput from '../shared/useInput';
import reactCSS from 'reactcss'
import { GithubPicker  } from 'react-color'


// const useColorSketch

const notasList = [
    {
        'titulo': 'Dominios .Dev',
        'fecha': new Date(),
        'estado': true,
        'color': '#19204D'
    },
    {
        'titulo': 'Dominios .Dev',
        'fecha': new Date(),
        'estado': false,
        'color': '#19204D'
    }
]


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
            <FormNota addNotas={addNotas} />
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

const FormNota = ({ addNotas }) => {

    const titulo = useInput('');
    const date = useInput(dateFns.format(new Date(), 'YYYY-MM-DD'));
    const [displayColorPicker, setDisplayColor] = useState(false);
    const [color, setColor] = useState('#19204D');
    // const [fecha, setFecha] = useState(dateFns.format(new Date(), 'YYYY-MM-DD'));


    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo.value === '') {
            return;
        }

        let obj = {
            titulo: titulo.value,
            fecha: date.value,
            color,
            estado: false
        }
        
        addNotas(obj);
    }

    const handleClick = () => {
        setDisplayColor(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColor(false);
    };

    const handleChange = (color, event) => {
        event.preventDefault();
        setColor(color.hex);
    };

    const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `${color}`,
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });

    return (
        <form onSubmit={handleSubmit} className="form-notas">
            <div className="color-label-box">
            <label> <b> Título </b>
                <input type="text" placeholder="nota" {...titulo} />
            </label>
            <label> <b> Fecha </b>
                <input type="date" {...date} />
            </label>
            </div>
            <div className="color-submit-box">
            <button type="submit">  + </button>
            <div className="color-div">
                <div style={styles.swatch} onClick={handleClick}>
                    <div style={styles.color} />
                </div>
                {displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={handleClose} />
                    <GithubPicker  color={color} onChange={handleChange} />
                </div> : null}
            </div>
            </div>

        </form>
    )

};


const NotaItem = ({ nota, removeNota, handleChangeEstado }) => {
    return (
        <li className="item-nota" style={{ 'backgroundColor': nota.color, 'padding': 10, 'color': '#fff' }}>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'flexGrow': 3 }}>
                <span> {nota.estado ? <strike className="strike-nota"> {nota.titulo} </strike> : nota.titulo}  </span>
                <span> {dateFns.format(new Date(nota.fecha), 'DD MMMM')} </span>
            </div>
            <div className="item-div">
                   <input type="checkbox" className="item-checkbox"
                    checked={nota.estado} onChange={handleChangeEstado} />
                   <span onClick={removeNota} > X </span>
            </div>


        </li>
    )
}



export default Notas;