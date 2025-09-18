
import { CardCoffeePay } from "../CardCoffeePay/CardCoffeePay"
import styles from "./styles.module.css"

export function CardContainerPay() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Cafés selecionados</h2>

            <div className={styles.cardContainer}>
                <CardCoffeePay/>
                



            <div className={styles.totalContainer} >

            <div>
                <span>Total de itens</span> <span>0</span>
            </div>
            <div>
                <span>Entrega</span> <span>0</span>
            </div>
            <div>
                <span>Total</span> <span>0</span>
            </div>

        </div>

        <button className={styles.buttonConfirmed}>
            CONFIRMAR PEDIDO
        </button>
                
                
            </div>

            
                
        </div>
    )
}