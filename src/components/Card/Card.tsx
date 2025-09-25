import { useContext } from "react";
import styles from "./styles.module.css";
import { ShoppingCartIcon } from "lucide-react";
import { DataContext } from "../../Context/DataContext";
import { NavLink } from "react-router";



interface CardProps {
    src : string
    title : string,
    description : string,
    price : number,
   
    
}

export function Card({ src, description, title, price }: CardProps) {

  
    
    const {addToList} = useContext(DataContext)

    const priceFormatted = price.toLocaleString("pt-BR", {
      style : "currency",
      currency : "BRL"
    })
  

  return (
    <li className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt="" />

      <div className={styles.main}>
        <h2>{title}</h2>
        <span>
          {description}
        </span>


        <div className={styles.price}>

          <p>
          R$ <strong>{priceFormatted.replace("R$", "")}</strong>
        </p>

        <NavLink to="/checkout">
          <button onClick={() => addToList({src,description,title,price})}   className={styles.cartButton}>

            <ShoppingCartIcon  size={32} color="white" fill="white"/>
          
          
        </button>
        </NavLink>
        </div>
        
       
      </div>

      

     
        

        

        
        
     
    </li>
  );
}
