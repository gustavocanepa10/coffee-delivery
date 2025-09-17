import { Card } from "./components/Card/Card";
import { Intro } from "./components/Intro/Intro";
import { LayoutContainer } from "./Layout/LayoutContainer";
import Americano from "./assets/Type=Americano.svg"



function App() {
  

  return (
    <LayoutContainer>
      {/* <Intro/> */}
      <Card src={Americano}  />
    </LayoutContainer>
     
        
    
  )
}

export default App
