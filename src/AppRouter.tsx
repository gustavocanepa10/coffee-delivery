import {Routes, Route, BrowserRouter} from "react-router"
import { Home } from "./pages/Home"
import {CheckoutPage } from "./pages/CheckoutPage"



export function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route  path="/" element = {<Home/>} />
            <Route  path="/checkout" element = {<CheckoutPage/>} />

        </Routes></BrowserRouter>
        
    )
}