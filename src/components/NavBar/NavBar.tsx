import Logo from "../../assets/Logo.png"
import styles from "./styles.module.css"

import mapPin from "../../assets/mapPin.png"
import Cart from "../../assets/cart.png"

export function NavBar() {
    return <header className={styles.header}>

        <nav>
            <div>
                <img src={Logo} alt="" />
            </div>
            

            <div className={styles.action}>
                <button className={styles.location}>
                    <img src={mapPin}/>
                    <span>
                        Rio de Janeiro, RJ
                    </span>
                    
                </button>

                <button className={styles.cart}>
                    <img src={Cart} alt="" />
                    
                </button>

                
            </div>


            
            
        </nav>

    </header>
}