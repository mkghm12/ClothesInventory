import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
const Navigation = () => {
    const currentUser = useSelector(userSelector);

    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const signOutHandler = async () => {
        dispatch(signOutStart());
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>
                                {' '}SIGN OUT{' '}
                            </NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
            </NavigationContainer>
            {
                isCartOpen && <CartDropdown />
            }
            <Outlet />
        </Fragment>
    )
}

export default Navigation;