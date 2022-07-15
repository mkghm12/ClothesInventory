import { FC, memo } from 'react';
import { CartItem as CartItemType } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails, ItemDetailsContainer } from './cart-item.styles';

type CartItemProps = {
    cartItem: CartItemType;
}

const CartItem:FC<CartItemProps> = memo(({ cartItem}) => {
    const { name, quantity, imageUrl,price } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetailsContainer>
                <ItemDetails>{name}</ItemDetails>
                <ItemDetails>{quantity} x {price}</ItemDetails>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
})

export default CartItem;