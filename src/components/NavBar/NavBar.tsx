import Logo from "../../assets/Logo.png";
import styles from "./styles.module.css";

import mapPin from "../../assets/mapPin.png";
import Cart from "../../assets/cart.png";
import { NavLink } from "react-router";

export function NavBar() {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          
          <NavLink to="/">
          <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div className={styles.action}>
          <button className={styles.location}>
            <img src={mapPin} />
            <span>Rio de Janeiro, RJ</span>
          </button>

          <button className={styles.cart}>
            <NavLink to="/checkout">
              <img src={Cart} alt="" />
            </NavLink>
            
          </button>
        </div>
      </nav>
    </header>
  );
}
