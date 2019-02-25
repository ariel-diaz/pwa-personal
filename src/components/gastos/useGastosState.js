import {useState, useEffect} from 'react'


export default initialGastosValue => {
    const initialList = JSON.parse(window.localStorage.getItem('initialList')) || [];
    const initialIngreso = Number(window.localStorage.getItem('initialIngreso')) || 0;
    const [list, setList] = useState(initialList);
    const [ingreso, setIngreso] = useState(initialIngreso);
    const calcularGasto = (arr) => {
         return (arr && arr.length === 0) ? 0
            :    arr.map(x => +x.costo).reduce( (a,b) => a + b);

    };

    const initialGasto = calcularGasto(list);
    const [gasto, setGasto] = useState(initialGasto);
    const initialSaldo = (ingreso - gasto) || 0;
    const [saldo, setSaldo] = useState(initialSaldo);

    const actualizarDetail = (newList) => {
        const newGasto = calcularGasto(newList);
        setList(newList);
        setGasto(calcularGasto(newList));
        setSaldo(ingreso - newGasto);
    }

    useEffect(() => {
        localStorage.setItem('initialIngreso', ingreso);
        localStorage.setItem('initialList', JSON.stringify(list));
    });


    return{
        list,
        ingreso,
        gasto,
        saldo,
        removeItem: itemIndex => {
            const newList = list.filter( (_, index) => index !== itemIndex);
            actualizarDetail(newList);
        },
        addItem: item => {
            if(item.titulo === "" || item.costo === "") {
                return;
            }

            const newList = [...list, item];
            actualizarDetail(newList);
        },
        updateIngreso: ingreso => {
           setIngreso(ingreso);
           setSaldo(ingreso - gasto);
        }
    };
}