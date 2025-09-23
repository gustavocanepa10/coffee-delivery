import { CardContainerPay } from "../components/CardContainerPay/CardContainerPay";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { LayoutContainer } from "../Layout/LayoutContainer";
import { type OrderProps } from "../components/Sidebar/Sidebar";
import {useForm} from "react-hook-form"
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import {useNavigate} from "react-router"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"



export function CheckoutPage() {
    const {register, handleSubmit, watch} = useForm<OrderProps>({
        
    })


    
    

    const navigate = useNavigate()



    const {setOrderData} = useContext(DataContext)

  function onSubmit(data : OrderProps ) {
    setOrderData(data)
    navigate("/sucess")
    console.log(data)

  }



  
    return (
        <div>
            <LayoutContainer>
                <div className="wrapper">
                    <Sidebar onSubmit = {onSubmit}  register = {register} handleSubmit = {handleSubmit} watch = {watch}/>
                    <CardContainerPay onConfirm = {handleSubmit(onSubmit)} />
                </div>
                
            </LayoutContainer>
        </div>
    )
}