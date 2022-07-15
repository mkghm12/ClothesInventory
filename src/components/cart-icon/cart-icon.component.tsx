import { useDispatch, useSelector } from 'react-redux';
import { setCartISOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen, selectTotalCount } from '../../store/cart/cart.selector';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectTotalCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const cartDropdownToggleHandler = () => {
    dispatch(setCartISOpen(!isCartOpen));
  }

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={cartDropdownToggleHandler} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;