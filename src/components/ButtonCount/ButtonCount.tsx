import { Minus, Plus } from "phosphor-react"
import { useState } from "react"

import styles from "./styles.module.css"

export function ButtonCount() {
  const [count, setCount] = useState(1)

  return (
    <div className={styles.counter}>
      <button className={styles.cartButton} 
        onClick={() => {
          if (count > 1) setCount(prev => prev - 1)
        }}
      >
        <Minus size={14} color="#8047F8" />
      </button>

      <span>{count}</span>

      <button onClick={() => setCount(prev => prev + 1)}>
        <Plus size={14} color="#8047F8" />
      </button>
    </div>
  )
}
