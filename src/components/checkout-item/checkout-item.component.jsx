import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, price, imageUrl, quantity } = cartItem;

    const incrementItemhandler = () => addItemToCart(cartItem);
    const decrementItemhandler = () => removeItemFromCart(cartItem);
    const clearItemhandler = () => clearItemFromCart(cartItem);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrementItemhandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={incrementItemhandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemhandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;