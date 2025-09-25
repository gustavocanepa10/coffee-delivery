import { createContext, useEffect, useState } from "react";
import type { OrderProps } from "../components/Sidebar/Sidebar";

interface DataProvider {
  children: React.ReactNode;
}

interface CardItem {
  src: string;
  title: string;
  description: string;
  price: number;
}

interface DataContextProps {
  Items: CardItem[] | undefined;
  setItems: React.Dispatch<React.SetStateAction<CardItem[]>>;
  addToList: (item: CardItem) => void;

  orderData: OrderProps | undefined;
  setOrderData: (data: OrderProps) => void;
}

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

export function DataContextProvider({ children }: DataProvider) {
  const [Items, setItems] = useState<CardItem[]>(() => {
    const saveItem = localStorage.getItem("@Coffee-Delivery: Pedido")

    if (saveItem) {
        return JSON.parse(saveItem)
    }

    return []
    
  });

  const [orderData, setOrderData] = useState<OrderProps | undefined >(() => {
    const saveOrder = localStorage.getItem("@Coffee-Delivery: Endereço da entrega")

    if (saveOrder && saveOrder !== "undefined") {
        return JSON.parse(saveOrder)
    }

    return undefined
    
  });

  useEffect(() => {
    const ItemsJSON = JSON.stringify(Items);
    const OrderJSON = JSON.stringify(orderData);

    localStorage.setItem("@Coffee-Delivery: Pedido", ItemsJSON);
    localStorage.setItem("@Coffee-Delivery: Endereço da entrega", OrderJSON);
  }, [Items, orderData]);




  

  function addToList(item: CardItem) {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  return (
    <DataContext.Provider
      value={{ Items, setItems, addToList, orderData, setOrderData }}
    >
      {children}
    </DataContext.Provider>
  );
}
