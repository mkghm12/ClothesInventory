import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.jsx';
import { CheckOutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.jsx";


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckOutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {
                cartItems.map((item) =>
                    <CheckoutItem key={item.id} cartItem={item} />
                )
            }
            <Total>Total: &#x20b9;{cartTotal}</Total>
        </CheckOutContainer>
    )
}

export default Checkout;