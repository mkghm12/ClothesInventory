import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import './navigation.styles.scss';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>
                                {' '}SIGN OUT{' '}
                            </span>
                        ) : (
                            <Link to='/auth' className="nav-link">
                                SIGN IN
                            </Link>
                        )
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;