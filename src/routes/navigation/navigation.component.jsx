import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";
const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);
    const signOutHandler = async () => {
        await signOutUser();
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