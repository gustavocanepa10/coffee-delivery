
import { useContext } from "react"
import { CardCoffeePay } from "../CardCoffeePay/CardCoffeePay"
import styles from "./styles.module.css"
import { DataContext } from "../../Context/DataContext"

export function CardContainerPay() {
    
    

    const {Items} = useContext(DataContext)
    
   
    

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Cafés selecionados</h2>

            <div className={styles.cardContainer}>

                {Items?.map((item) => <CardCoffeePay key={item.title} src = {item.src} title = {item.title} price = {item.price}  />)}

               

                
                



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