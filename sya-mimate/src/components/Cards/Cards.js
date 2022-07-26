import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../ItemCount';
import { MdAddShoppingCart } from "react-icons/md";
import './index.css'

export default function CardProducto() {
  return (
    <Card style={{ width: '18rem' }} className='gap-4 m-4 '>
      <MdAddShoppingCart  className='iconProductAdd m-4 '/>
      <Card.Body className='cardBody' >
        <Card.Title >Producto</Card.Title>
        <Card.Text>
            Lorem Ipsum Dolor Set
        </Card.Text>
        <Counter/>
        <Button variant="success">¡Quiero mi/s producto/s en mi carrito!
        </Button>
      </Card.Body>
    </Card>
  );
}