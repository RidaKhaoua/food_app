import React, { useState } from 'react'

import { TFood } from '@types'
import FoodImg from '../FoodImg/FoodImg';
import FoodInfo from '../FoodInfo/FoodInfo';

import styles from "./styles.module.css"
import { assets } from '@assets';
import FoodAddQuantity from '../FoodAddQuantity/FoodAddQuantity';

const {food_item} = styles;

function FoodItem({id, name, image, price, description, category}: TFood) {
  

  return (
    <div className={food_item}>
      <FoodImg img={image}/>
      <FoodAddQuantity/>
      <FoodInfo name={name} description={description} price={price} />
    </div>
  )
}

export default FoodItem