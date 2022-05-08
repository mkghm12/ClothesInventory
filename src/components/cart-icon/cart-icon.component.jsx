import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);

 
  const cartDropdownToggleHandler = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='cart-icon-container' >
      <ShoppingIcon className='shopping-icon' onClick={cartDropdownToggleHandler} />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;