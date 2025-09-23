import { Routes, Route, BrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CheckoutPage } from "./pages/CheckoutPage";
import { DataContextProvider } from "./Context/DataContext";
import { Sucess } from "./pages/Sucess/Sucess";


export function AppRouter() {
  return (
      <DataContextProvider>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/sucess" element={<Sucess />} />

      </Routes>
    </BrowserRouter>

      </DataContextProvider>
      
    
    
  );
}
