
import { useContext } from "react"
import { CardCoffeePay } from "../CardCoffeePay/CardCoffeePay"
import styles from "./styles.module.css"
import { DataContext } from "../../Context/DataContext"


interface CardContainerPayProps {
    onConfirm : () => void
}

export function CardContainerPay({onConfirm} : CardContainerPayProps) {
    
    

    const {Items} = useContext(DataContext)
    
    console.log(Items)

    
   const sumTotal = Items?.reduce((acc, current) => {
            return acc + current.price
   }, 0)


   const deliveryPrice = 3.50

   
   
   const total = (sumTotal ?? 0) + deliveryPrice
    

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Cafés selecionados</h2>

            <div className={styles.cardContainer}>

                {Items?.map((item) => <CardCoffeePay key={item.title} src = {item.src} title = {item.title} price = {item.price}  />)}

               

                
                



            <div className={styles.totalContainer}>

            <div>
                <span>Total de itens</span> {sumTotal ? <span>{sumTotal.toLocaleString("pt-BR", {
                    style : "currency",
                    currency : "BRL"
                })}</span> : <span>0</span>}
            </div>
            <div>
                <span>Entrega</span> <span>{deliveryPrice.toLocaleString("pt-BR", {
                    style : "currency",
                    currency : "BRL"
                })}</span>
            </div>
            <div>
                <span>Total</span>  <span>{total.toLocaleString("pt-BR", {
                    style : "currency",
                    currency : "BRL"
                })}</span>
            </div>

        </div>

        <button onClick={onConfirm} className={styles.buttonConfirmed}>
            CONFIRMAR PEDIDO
        </button>
                
                
            </div>

            
                
        </div>
    )
}