
import React, {useState} from 'react';
import useInput from './../shared/useInput';
import {format}  from 'date-fns';
import reactCSS from 'reactcss'
import { GithubPicker  } from 'react-color'


const FormNota = ({ addNotas }) => {

    const titulo = useInput('');
    const date = useInput(format(new Date(), 'YYYY-MM-DD'));
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
        titulo.clear('')
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
        setDisplayColor(false);
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
            <button className="form-gastos-input" type="submit">Agregar</button>
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

export default FormNota;