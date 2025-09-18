import { useState } from "react";
import styles from "./styles.module.css";
import { Plus, Minus } from "phosphor-react";
import shoppingCart from "../../assets/ShoppingCartSimple.svg";
import { ButtonCount } from "../ButtonCount/ButtonCount";

interface CardProps {
  src: string;
  description: string;
  name: string;
  price: number;
}

export function Card({ src, description, name, price }: CardProps) {
  return (
    <li className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt="" />

      <div className={styles.main}>
        <h2>{name}</h2>
      </div>

      <div className={styles.description}>{description}</div>

      <div className={styles.buy}>
        <span>
          R$ <strong>{price}</strong>
        </span>

        <div className={styles.counter}>
          <ButtonCount />
        </div>

        <button className={styles.cartButton}>
          <img src={shoppingCart} alt="" />
        </button>
      </div>
    </li>
  );
}
