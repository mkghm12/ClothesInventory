import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);

 
  const cartDropdownToggleHandler = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <CartIconContainer>
      <ShoppingIcon onClick={cartDropdownToggleHandler} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;