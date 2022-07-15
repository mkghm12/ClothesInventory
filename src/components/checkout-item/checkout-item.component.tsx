import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import { ArrowButton, CheckoutItemContainer, ImageContainer, ItemDetail, Quantity, RemoveButton, Value } from './checkout-item.styles';

type CheckoutItemPropsType = {
    cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemPropsType> = ({ cartItem }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, imageUrl, quantity } = cartItem;

    const incrementItemhandler = () => dispatch(addItemToCart(cartItems,cartItem));
    const decrementItemhandler = () => dispatch(removeItemFromCart(cartItems,cartItem));
    const clearItemhandler = () => dispatch(clearItemFromCart(cartItems,cartItem));
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