import { Card } from "./components/Card/Card";
import { Intro } from "./components/Intro/Intro";
import { LayoutContainer } from "./Layout/LayoutContainer";
import Americano from "./assets/Type=Americano.svg"
import { CoffeeList } from "./components/CoffeeList/CoffeeList";



function App() {
  

  return (
    <LayoutContainer>
      <Intro/>
      <CoffeeList/>
    </LayoutContainer>
     
        
    
  )
}

export default App
