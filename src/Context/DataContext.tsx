import { createContext, useState } from "react";
import type { OrderProps } from "../components/Sidebar/Sidebar";

interface DataProvider {
    children : React.ReactNode
}

interface CardItem {
    src : string
    title : string,
    description : string,
    price : number,
}

interface DataContextProps {
    Items : CardItem[] | undefined
    setItems : React.Dispatch<React.SetStateAction<CardItem[]>>
    addToList : (item : CardItem) => void

    orderData : OrderProps | undefined
    setOrderData : (data : OrderProps) => void
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)


export function DataContextProvider({children} : DataProvider) {


    const [Items, setItems] = useState<CardItem[]>([])

    const [orderData, setOrderData] = useState<OrderProps>()

    function addToList(item : CardItem) {
        setItems((prevItems) => {
            return [...prevItems, item]
        })
    }

    


    return (
        <DataContext.Provider value={{Items,setItems, addToList, orderData, setOrderData}}>
            {children}
        </DataContext.Provider>
    )
}