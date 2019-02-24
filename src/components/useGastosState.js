import {useState} from 'react'


export default initialGastosValue => {
    const [list, setList] = useState(initialGastosValue);
    const [ingreso, setIngreso] = useState(15800);
    const calcularGasto = (arr) => {
         return (arr && arr.length === 0) ? 0
            :    arr.map(x => +x.costo).reduce( (a,b) => a + b);

    };
    const initialGasto = calcularGasto(list);
    console.log(`Initial gasto: ${initialGasto}`);
    const [gasto, setGasto] = useState(initialGasto);
    const initialSaldo = (15800 - gasto) || 0;
    const [saldo, setSaldo] = useState(initialSaldo);

    const actualizarDetail = (newList) => {
        const newGasto = calcularGasto(newList);
        setList(newList);
        setGasto(calcularGasto(newList));
        setSaldo(ingreso - newGasto);
    }


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
            const newList = [...list, item];
            actualizarDetail(newList);
        }
    };
}