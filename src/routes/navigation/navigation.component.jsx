import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">
                        <h1>Shop</h1>
                    </Link>
                    <Link to='/auth' className="nav-link">
                        <h1>SignIn</h1>
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;