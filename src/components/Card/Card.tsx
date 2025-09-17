import { useState } from "react";
import styles from "./styles.module.css";
import { Plus, Minus } from "phosphor-react"
import shoppingCart from "../../assets/ShoppingCartSimple.svg"

interface CardProps {
  src: string;
  description: string,
  name: string,
  price: number

}

export function Card({ src, description, name, price }: CardProps) {

  const [count, setCount] = useState(1)



  return (
    <li className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt="" />

      <div className={styles.main}>
        <span className={styles.tag}>Tradicional</span>

        <h2>{name}</h2>
        <p>
          {description}
        </p>
      </div>

      <div className={styles.buy}>

        <span>
          R$ <strong>{price}</strong>
        </span>


        <div className={styles.counter}>
          <button onClick={() => {
            if (count < 2) return
            setCount(count => count - 1)
          }


          }

          > <Minus size={14} color="#8047F8" /> </button>
          <span>
            {count}
          </span>
          <button onClick={() => setCount(count => count + 1)}><Plus size={14} color="#8047F8" /></button>


        </div>

        <button className={styles.cartButton}>
          <img src={shoppingCart} alt="" />
        </button>
      </div>
    </li>
  );
}
