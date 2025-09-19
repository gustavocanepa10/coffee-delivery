import styles from "./styles.module.css";

import { ButtonCount } from "../ButtonCount/ButtonCount";
import { Trash } from "phosphor-react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";



interface CardProps {
  src : string,
  title : string
  price : number
}

export function CardCoffeePay({src,title, price} : CardProps) {


  const {Items, setItems} = useContext(DataContext)

   function handleRemove(itemTitle : string) {

        setItems((prevItems) => prevItems.filter(Item => Item.title !==itemTitle))

    }
  

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.info}>
          <img src={src} alt="" />

          <div className={styles.details}>
            <h3>{title}</h3>
            <div className={styles.buttonContainer}>
              <ButtonCount />
              <button onClick={() => handleRemove(title)} className={styles.removeButton}>
                <Trash size={16} color="#8047F8" />
                <span>REMOVER</span>
              </button>
            </div>
          </div>
        </div>
        <p>{price}</p>
      </div>

      <div className={styles.divider}></div>
    </div>
  );
}
