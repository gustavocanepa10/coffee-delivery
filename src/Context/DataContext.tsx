import { createContext, useState } from "react";

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
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)


export function DataContextProvider({children} : DataProvider) {


    const [Items, setItems] = useState<CardItem[]>([])

    function addToList(item : CardItem) {
        setItems((prevItems) => {
            return [...prevItems, item]
        })
    }


    return (
        <DataContext.Provider value={{Items,setItems, addToList}}>
            {children}
        </DataContext.Provider>
    )
}