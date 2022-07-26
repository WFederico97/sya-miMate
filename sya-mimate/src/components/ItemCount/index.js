import{ useState} from 'react'
import './index.css'


export default function Counter (props) {
    const [Counter, setCounter] = useState(props.initial);
    
    function addCounter ( ){
        if (Counter >= props.stock){
                alert(`El stock maximo es ${props.stock}`);
        } else {
            setCounter (Counter + 1);
        }

    }

    function reduceCounter () {
        if (Counter <= 1) {
            alert("¡Usted no ha seleccionado ningun producto!")
        } else {
            setCounter (Counter - 1)
        }
    }

    return (
        <div className='container d-flex mb-3 justify-content-evenly'>
            <div className='d-flex row col-6'>
                <button className='col-4 btnAdd' onClick={addCounter}>+</button>
                <span className='col-4'> {Counter}</span>
                <button className='col-4 btnRedd' onClick={reduceCounter}>-</button>    
            </div>
        </div>
    )
}