import { Sidebar } from "../components/Sidebar/Sidebar";
import { LayoutContainer } from "../Layout/LayoutContainer";


export function CheckoutPage() {
    return (
        <div>
            <LayoutContainer>
                <div className="wrapper">
                    <Sidebar/>
                </div>
                
            </LayoutContainer>
        </div>
    )
}