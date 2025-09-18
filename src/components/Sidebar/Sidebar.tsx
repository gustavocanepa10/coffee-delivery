import styles from "./styles.module.css";
import Icon from "../../assets/Icon.svg";
import Icone from "../../assets/icone.svg";
import { Input } from "../Input/Input";
import { Bank, CreditCard, Money } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Complete seu pedido</h2>

      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <img src={Icon} alt="Ícone de localização" />

          <div>
            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>

        <form action="">
          <Input placeholder="CEP" type="text" />
          <Input placeholder="Rua" type="text" />
          <div className={styles.formDiv}>
            <Input placeholder="Número" type="text" />
            <Input placeholder="Complemento" type="text" />
            <Input placeholder="Bairro" type="text" />
            <Input placeholder="Cidade" type="text" />
          </div>
        </form>
      </div>

      <div className={styles.payContainer}>
        <div className={styles.payDiv}>
          <div className={styles.formHeader}>
            <img src={Icone} alt="Ícone de pagamento" />

            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className={styles.payTypes}>
            <input type="radio" id="credit" name="payment" value="credit" />
            <label htmlFor="credit">
              <CreditCard size={20} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </label>

            <input type="radio" id="debit" name="payment" value="debit" />
            <label htmlFor="debit">
              <Bank size={20} color="#8047F8" />
              CARTÃO DE DÉBITO
            </label>

            <input type="radio" id="money" name="payment" value="money" />
            <label htmlFor="money">
              <Money size={20} color="#8047F8" />
              DINHEIRO
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
