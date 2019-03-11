import {useState, useEffect} from 'react'
import dateFns from 'date-fns';

const calcularGasto = (arr) => {
    return (arr && arr.length === 0) ? 0
       :    arr.map(x => +x.costo).reduce( (a,b) => a + b);

};



const initialListMock = [
    {
        month: 2,
        year: 2019,
        items: [{
            costo: "800",
            fecha: "2019-03-10T21:23:23.572Z",
            id: 3,
            titulo: "Item",
        },
        {
            costo: "750",
            fecha: "2019-03-10T21:23:23.572Z",
            id: 4,
            titulo: "Gasto 2",
        }]
    }
]

const useGastosDetail = () => {
    
    const initialDateActual = {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
    }

    const initialData =  JSON.parse(window.localStorage.getItem('initialData')) || [];;
    
    const [dateActual, setDateActual] = useState(initialDateActual);
    const [fullList, setFullList] = useState(initialData);

    const initialList = fullList.find(x => x.month === dateActual.month
                                  && dateActual.year === x.year);
    
    const initialIngreso = Number(window.localStorage.getItem('initialIngreso')) || 0;
    const [ingreso, setIngreso] = useState(initialIngreso);



    const initialListData = initialList ? initialList.items : [];
    const [list, setList] = useState(initialListData);


    const initialGasto = calcularGasto(list);
    const [gasto, setGasto] = useState(initialGasto);

    const initialSaldo = (ingreso - gasto) || 0;
    const [saldo, setSaldo] = useState(initialSaldo);

    const actualizarDetail = (newList) => {
        const newGasto = calcularGasto(newList);
        const newSaldo = ingreso - newGasto;
        setList(newList);
        setGasto(newGasto);
        setSaldo(newSaldo);
    }


    useEffect(() => {
        actualizarDetail(list);
        localStorage.setItem('initialIngreso', ingreso);
        localStorage.setItem('initialData', JSON.stringify(fullList));
    },[fullList, ingreso]);


    return {
        list,
        ingreso,
        gasto,
        saldo,
        removeItem: itemIndex => {
            let indexArr = fullList.findIndex(x => x.month === dateActual.month && x.year === dateActual.year);
            const newFullList = fullList.slice();
            console.log(newFullList);

            const newItems = newFullList[indexArr].items.filter( (_, index) => index !== itemIndex);
            newFullList[indexArr].items = newItems;

             setList(newItems);
            setFullList(newFullList)
        },
        addItem: item => {
            let newArray = fullList.slice();
            let indexArr = fullList.findIndex(x => x.month === dateActual.month && x.year === dateActual.year);
           
            if(indexArr === -1) {
                const newItem = {
                    month: dateActual.month,
                    year: dateActual.year,
                    items: [item]
                }
                newArray = [...newArray, newItem];
                indexArr = newArray.findIndex(x => x.month === dateActual.month && x.year === dateActual.year);
            } else {
                newArray[indexArr].items.push(item);
            }

            setFullList(newArray);
            setList(newArray[indexArr].items)
        },
        updateIngreso: ingreso => {
           setIngreso(ingreso);
           setSaldo(ingreso - gasto);
        }
    };
}


export default useGastosDetail;