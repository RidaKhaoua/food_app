import React from 'react'
import { Foods } from '@components/E-food'
import styles from "./style.module.css";

const {food_section, food_section_title} = styles;

function FoodSection() {
  return (
    <div className={food_section}>
        <h2 className={food_section_title}>Top disches for you</h2>
        <Foods/>
    </div>
  )
}

export default FoodSection