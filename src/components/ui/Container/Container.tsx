import React from 'react'
import styles from "./style.module.css";
type TContainer = {
    children: React.ReactNode
}

const {container} = styles

function Container({children}: TContainer) {
  return (
    <div className={container}>
        {children}
    </div>
  )
}

export default Container