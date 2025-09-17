import styles from "./styles.module.css";
import Icon from "../../assets/Icon.png";
import icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/clock-icon.png";
import Icon4 from "../../assets/clock-icon.png";
import Imagem from "../../assets/Imagem.svg"

export function Intro() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
          qualquer hora
        </span>

        <div className={styles.itens}>
          <span>
            <img src={Icon} />
            Compra simples e segura
          </span>
          <span>
            <img src={icon2} />
            Embalagem mantém o café intacto
          </span>

          <span>
            <img src={Icon3} />
            Entrega rápida e rastreada
          </span>
          <span>
            <img src={Icon4} alt="" />O café chega fresquinho até você
          </span>
        </div>
      </div>
      <div className={styles.imagemDiv} >

        <img src={Imagem} alt="" />

      </div>
    </main>
  );
}
