import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { BackgroundImage, CustomButtonContainer, Footer, ProductCardContainer, ProductName, ProductPrice } from "./product-card.styles";
import { CategoryItem } from "../../store/categories/category.types";
import { FC } from "react";

type ProductCardPropsType = {
    product: CategoryItem
}

const ProductCard:FC<ProductCardPropsType> = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, imageUrl } = product;
    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

    return (
        <ProductCardContainer>
            <BackgroundImage imageUrl={imageUrl} alt={`${name}`} />
            <Footer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <CustomButtonContainer buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</CustomButtonContainer>
        </ProductCardContainer>
    )
}

export default ProductCard