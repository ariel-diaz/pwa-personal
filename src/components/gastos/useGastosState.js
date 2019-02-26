import {useState, useEffect} from 'react'

const calcularGasto = (arr) => {
    return (arr && arr.length === 0) ? 0
       :    arr.map(x => +x.costo).reduce( (a,b) => a + b);

};


const useGastosDetail = () => {
    const initialList = JSON.parse(window.localStorage.getItem('initialList')) || [];
    const initialIngreso = Number(window.localStorage.getItem('initialIngreso')) || 0;

    const [list, setList] = useState(initialList);
    const [ingreso, setIngreso] = useState(initialIngreso);

    const initialGasto = calcularGasto(list);
    const [gasto, setGasto] = useState(initialGasto);

    const initialSaldo = (ingreso - gasto) || 0;
    const [saldo, setSaldo] = useState(initialSaldo);

    const actualizarDetail = (newList) => {
        setList(newList);
        const newGasto = calcularGasto(list);
        setGasto(newGasto);
        setSaldo(ingreso - newGasto);
    }


    useEffect(() => {
        console.log('Actualizo la lista')
        actualizarDetail(list);
        localStorage.setItem('initialIngreso', ingreso);
        localStorage.setItem('initialList', JSON.stringify(list));
    },[list]);


    return {
        list,
        ingreso,
        gasto,
        saldo,
        removeItem: itemIndex => {
            const newList = list.filter( (_, index) => index !== itemIndex);
            setList(newList);
        },
        addItem: item => {
            const newList = [...list, item];
            setList(newList);
        },
        updateIngreso: ingreso => {
           setIngreso(ingreso);
           setSaldo(ingreso - gasto);
        }
    };
}


export default useGastosDetail;