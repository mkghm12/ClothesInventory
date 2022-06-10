import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen, selectTotalCount } from '../../store/cart/cart.selector';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectTotalCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const cartDropdownToggleHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={cartDropdownToggleHandler} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;