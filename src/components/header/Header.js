import LogoImg from '../../assets/images/shoppee-logo.png';
import CartImg from '../../assets/images/cart.png';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary  ">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="#">
                        <img src={LogoImg} className={styles.logoImg} />
                    </Link>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0 ">
                            <li className="nav-item ps-5">
                                <NavLink className="nav-link  " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item ps-5">
                                <NavLink className="nav-link  " aria-current="page" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item ps-5">
                                <NavLink className="nav-link  " aria-current="page" to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item ps-5">
                                <NavLink className="nav-link " aria-current="page" to="/contactus">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <Link className="navbar-nav p-2 border rounded border-light" to="/cartpage">
                        <img  src={CartImg} height={30} />
                    </Link>    
                     </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;