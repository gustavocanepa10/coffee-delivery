import styles from "./styles.module.css"
import Icon from "../../assets/Icon.svg"
import { Input } from "../Input/Input"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>
                Complete seu pedido
            </h2>

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
        </aside>
    )
}
