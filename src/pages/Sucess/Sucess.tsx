
import { useContext } from "react"
import { LayoutContainer } from "../../Layout/LayoutContainer"
import { DataContext } from "../../Context/DataContext"
import styles from "./styles.module.css"
import PinIcon from "../../assets/PinIcon.png"
import ClockIcon from "../../assets/clock-icon.png"
import Illustration from "../../assets/Illustration.png"


export function Sucess() {
    const {orderData} = useContext(DataContext)
    
    return (
        <LayoutContainer>

            
            <div className={styles.sucess}>

                <h2>
                    Uhu! Pedido Confirmado
                </h2>

                <span>
                    Agora é só aguardar que logo o café chegará até você
                </span>

                <div className={styles.order}>
                    <div className={styles.orderInfo}>
                        <div>
                            <img src={PinIcon} alt="" />
                            <span>
                                Entrega em <strong>{orderData?.street}, {orderData?.number}</strong><br/>
                                {orderData?.city}
                            </span>
                        </div>
                        <div>
                            <img src={ClockIcon} alt="" />
                            <span>
                                Previsão de entrega <br/> <strong>20 min - 30 min</strong>
                            </span>
                        </div>
                        <div>
                            <img src={ClockIcon} alt="" />
                            <span>
                                Pagamento na entrega <br/>
                                <strong>{orderData?.payment}</strong>
                                
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Illustration} alt="" />
                    </div>
                </div>
               

            </div>
        </LayoutContainer>
    )
}