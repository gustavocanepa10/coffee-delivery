import styles from "./styles.module.css";
import Americano from "../../assets/Type=Americano.svg";
import { ButtonCount } from "../ButtonCount/ButtonCount";
import { Trash } from "phosphor-react";

export function CardCoffeePay() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.info}>
          <img src={Americano} alt="" />

          <div className={styles.details}>
            <h3>Expresso Tradicional</h3>
            <div className={styles.buttonContainer}>
              <ButtonCount />
              <button className={styles.removeButton}>
                <Trash size={16} color="#8047F8" />
                <span>REMOVER</span>
              </button>
            </div>
          </div>
        </div>
        <p>9,90</p>
      </div>

        <div className={styles.divider}>

        </div>


        

    </div>
  );
}
