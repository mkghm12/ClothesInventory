import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectTotalCartPrice } from "../../store/cart/cart.selector";
import './checkout.styles.jsx';
import { CheckOutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.jsx";


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectTotalCartPrice);
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