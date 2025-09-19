import styles from "./styles.module.css";
import Icon from "../../assets/Icon.svg";
import Icone from "../../assets/icone.svg";
import { Input } from "../Input/Input";
import { Bank, CreditCard, Money } from "phosphor-react";
import {useForm} from "react-hook-form"

interface OrderProps {
  CEP : string,
  street : string,
  number : number,
  complement : string,
  neighborhood : string,
  city : string
  payment : "credit" | "debit" | "money"
}

export function Sidebar() {

  const {register, handleSubmit} = useForm<OrderProps>()

  function onSubmit(data : OrderProps ) {

    console.log(data)

  }


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

        <form onSubmit={handleSubmit(onSubmit)} action="">
          <Input required {...register("CEP")} placeholder="CEP" id="CEP" type="text" />
          <Input {...register("street")} required placeholder="Rua" type="text" />
          <div className={styles.formDiv}>
            <Input required  {...register("number")} id="Número" placeholder="Número" type="text" />
            <Input required  {...register("complement")} id="Complemento" placeholder="Complemento" type="text" />
            <Input  required {...register("neighborhood")} id="Bairro" placeholder="Bairro" type="text" />
            <Input required  {...register("city")} id="Cidade" placeholder="Cidade" type="text" />
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
            <input {...register("payment")} type="radio" id="credit" name="" value="credit" />
            <label htmlFor="credit">
              <CreditCard size={20} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </label>

            <input {...register("payment")} type="radio" id="debit" name="payment" value="debit" />
            <label htmlFor="debit">
              <Bank size={20} color="#8047F8" />
              CARTÃO DE DÉBITO
            </label>

            <input {...register("payment")} type="radio" id="money" name="payment" value="money" />
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
