import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.jsx';
import { ArrowButton, CheckoutItemContainer, ImageContainer, ItemDetail, Quantity, RemoveButton, Value } from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, price, imageUrl, quantity } = cartItem;

    const incrementItemhandler = () => addItemToCart(cartItem);
    const decrementItemhandler = () => removeItemFromCart(cartItem);
    const clearItemhandler = () => clearItemFromCart(cartItem);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <ItemDetail>{name}</ItemDetail>
            <Quantity>
                <ArrowButton onClick={decrementItemhandler}>&#10094;</ArrowButton>
                <Value>{quantity}</Value>
                <ArrowButton onClick={incrementItemhandler}>&#10095;</ArrowButton>
            </Quantity>
            <ItemDetail>{price}</ItemDetail>
            <RemoveButton onClick={clearItemhandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;