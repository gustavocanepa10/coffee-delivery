import { Card } from "../Card/Card"
import { coffeeList } from "../../menu"
import styles from "./styles.module.css"




export function CoffeeList() {
    return (
        <div className={styles.listContainer}>
            <h2>
                Nossos cafés
            </h2>
            <ul className={styles.coffeeList}>

                {coffeeList.map((coffee) => <Card src={coffee.image} description = {coffee.description} name={coffee.name} price = {coffee.price} />)}

            </ul>
        </div>
    )
}