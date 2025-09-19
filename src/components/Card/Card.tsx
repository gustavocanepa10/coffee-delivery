import { useContext, useState } from "react";
import styles from "./styles.module.css";

import { ButtonCount } from "../ButtonCount/ButtonCount";

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
  

  return (
    <li className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt="" />

      <div className={styles.main}>
        <h2>{title}</h2>
      </div>

      <div className={styles.description}>{description}</div>

      <div className={styles.buy}>
        <span>
          R$ <strong>{price}</strong>
        </span>

        {/* <div className={styles.counter}>
          <ButtonCount />
        </div> */}

        <NavLink to="/checkout">
          <button onClick={() => addToList({src,description,title,price})}   className={styles.cartButton}>

            <ShoppingCartIcon  size={32} color="white" fill="white"/>
          
          
        </button>
        </NavLink>
        
      </div>
    </li>
  );
}
