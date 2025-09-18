import { CoffeeList } from "../components/CoffeeList/CoffeeList";
import { Intro } from "../components/Intro/Intro";
import  { LayoutContainer } from "../Layout/LayoutContainer";


export function Home() {
    return (
    <LayoutContainer>
      <Intro/>
      <CoffeeList/>
    </LayoutContainer>
    )
}