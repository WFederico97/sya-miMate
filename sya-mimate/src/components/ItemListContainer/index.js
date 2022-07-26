import './index.css'
import CardProducto from '../Cards/Cards';

export default function ItemListContainer () {
    return (
        <div className='producto flex-container row justify-content-center wrap'>
            <CardProducto/>
            <CardProducto/>
        </div>
    );
}