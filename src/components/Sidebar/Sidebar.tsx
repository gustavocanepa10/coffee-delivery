import styles from "./styles.module.css";
import Icon from "../../assets/Icon.svg";
import Icone from "../../assets/icone.svg";
import { Input } from "../Input/Input";
import { Bank, CreditCard, Money } from "phosphor-react";
import { type UseFormHandleSubmit, type UseFormRegister, type UseFormWatch } from "react-hook-form"


export interface OrderProps {
  CEP: string,
  street: string,
  number: number,
  complement: string,
  neighborhood: string,
  city: string
  payment: "credit" | "debit" | "money"
}

interface SidebarProps {
  onSubmit: (data: OrderProps) => void
  handleSubmit: UseFormHandleSubmit<OrderProps, OrderProps>
  watch: UseFormWatch<OrderProps>
  register: UseFormRegister<OrderProps>
}

export function Sidebar({ onSubmit, handleSubmit, watch, register }: SidebarProps) {

  const selectedValue = watch("payment")






  console.log(selectedValue)


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
            <Input required {...register("neighborhood")} id="Bairro" placeholder="Bairro" type="text" />
            <Input required  {...register("city")} id="Cidade" placeholder="Cidade" type="text" />
          </div>

          <div className={styles.payDiv}>
            <div className={styles.formHeader}>
              <img src={Icone} alt="Ícone de pagamento" />

              <div className={styles.payInfo}>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </p>
              </div>
            </div>

            <div className={styles.payTypes}>
              <input {...register("payment")} type="radio" id="credit" name="payment" value="Cartão de Crédito" />
              <label htmlFor="credit">
                <CreditCard size={20} color="#8047F8" />
                CARTÃO DE CRÉDITO
              </label>

              <input {...register("payment")} type="radio" id="debit" name="payment" value="Cartão de Débito" />
              <label htmlFor="debit">
                <Bank size={20} color="#8047F8" />
                CARTÃO DE DÉBITO
              </label>

              <input {...register("payment")} type="radio" id="money" name="payment" value="Dinheiro" />
              <label htmlFor="money">
                <Money size={20} color="#8047F8" />
                DINHEIRO
              </label>
            </div>
          </div>
        </form>


      </div>




    </aside>
  );
}
