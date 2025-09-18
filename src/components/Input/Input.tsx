import styles from "./styles.module.css"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
     
      
}


export function Input({placeholder} : InputProps) {
    return <input className={styles.input } placeholder={placeholder} type="text" />
}