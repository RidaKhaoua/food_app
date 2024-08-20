import React from 'react'

import {Herosection} from "@components/Sections"
import useCategorie from '@hooks/useCategorie'
import {Categories} from '@components/E-food';
import {FoodSection} from "@components/Sections" 


function HomePage() {
  const {categories, status, error} = useCategorie();
  
  return (
    <div>
      <Herosection/> 
      <Categories data={categories} status={status} error={error}/>
      <FoodSection/>
    </div>
  )
}

export default HomePage