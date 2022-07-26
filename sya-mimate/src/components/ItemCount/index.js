import{ useState, useEffect} from 'react'


export default function Counter () {
    const [Counter, setCounter] = useState(0);
    

    useEffect (() => {
        return ( )=> {
            
        }
    }, [Counter])

    function addCounter ( ){
        setCounter (Counter + 1);
        console.log('Agregaste un producto, bien ahi :D')

    }

    function reduceCounter () {
        setCounter (Counter - 1)
        console.log('Quitaste un producto, mal ahi <:(')
    }

    return (
        <div className='container d-flex mb-3'>
            <div className='d-flex row justify-content-center'>
                <button className='col-4' onClick={addCounter}>+</button>
                <p className='col-4 mb-2'> {Counter}</p>
                <button className='col-4' onClick={reduceCounter}>-</button>    
            </div>
        </div>
    )
}