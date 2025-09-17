import styles from "./styles.module.css";

interface CardProps {
  src: string;
}

export function Card({ src }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt="" />

      <div className={styles.tags}>
        <span className={styles.tag}>Tradicional</span>
      </div>

      <h2>Expresso Tradicional</h2>
      <p>
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className={styles.buy}>

        <span>
            R$ <strong>9,90</strong>
        </span>


            <div>

                

            </div>
      </div>
    </div>
  );
}
