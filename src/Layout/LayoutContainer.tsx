

import { NavBar } from "../components/NavBar/NavBar"
import styles from "./styles.module.css"

interface LayoutContainerProps {
    children : React.ReactNode
}

export function LayoutContainer({children} : LayoutContainerProps) {
    return (
        <div className={styles.container}>
            <NavBar/>
            {children}
        </div>
    )
}