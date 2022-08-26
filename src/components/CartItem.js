import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ContextTheme from '../context/ContextTheme';

function CartItem(props){
    const {cart} = props;
    const {addProd, removeProd, clickRemove} = useContext(ContextTheme);

    return <>
        <ListGroup.Item className='d-flex justify-content-between text-reset bg-info'>
            <div>
                {cart.brand} {cart.model} ({cart.price}UAH)
            </div>
            <div>
                <Badge onClick={()=> clickRemove(cart.id)} className='mx-4' bg="danger">Remove</Badge>
                <Badge onClick={()=> addProd(cart.id)} bg="success">+</Badge>
                <div className={'count-span d-inline-block mx-2'}>{cart.count}</div>
                <Badge onClick={()=> removeProd(cart.id)} bg="warning" className={cart.count === 1 ? 'bg-opacity-50' : 'bg-opacity-100' }>-</Badge>
            </div>
        </ListGroup.Item>
    </> 
}

export default CartItem;