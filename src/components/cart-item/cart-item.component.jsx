import { CartItemContainer, ItemDetails, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
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
}

export default CartItem;