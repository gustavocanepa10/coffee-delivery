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

                {coffeeList.map((coffee) => <Card key={coffee.id} src={coffee.image} description = {coffee.description} title={coffee.title} price = {coffee.price} />)}

            </ul>
        </div>
    )
}