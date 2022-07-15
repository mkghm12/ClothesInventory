import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form-components";
import { selectCartItems, selectTotalCartPrice } from "../../store/cart/cart.selector";
import { CheckOutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";


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
            <PaymentForm/>
        </CheckOutContainer>
    )
}

export default Checkout;