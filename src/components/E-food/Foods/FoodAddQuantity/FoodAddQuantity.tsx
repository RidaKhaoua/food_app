import { assets } from "@assets";
import React, { useState } from "react";
import styles from "./style.module.css";

const { food_add_quantity, food_counter, food_quantity } = styles;

function FoodAddQuantity() {
  const [counterQuatity, setCounterQuantity] = useState(0);

  const handleAddQuantity = () => {
    setCounterQuantity((prev) => prev + 1);
  };

  const handlSubstractQuantity = () => {
    setCounterQuantity((prev) => prev - 1);
  };

  return (
    <div className={food_quantity}>
      {!counterQuatity ? (
        <div className={food_add_quantity} onClick={handleAddQuantity}>
          <img src={assets.add_icon_white} alt="acon add" />
        </div>
      ) : (
        <div className={food_counter}>
          <img
            src={assets.remove_icon_red}
            alt="icon plus"
            onClick={handlSubstractQuantity}
          />
          <p>{counterQuatity}</p>
          <img
            src={assets.add_icon_green}
            alt="icon minus"
            onClick={ handleAddQuantity}
          />
        </div>
      )}
    </div>
  );
}

export default FoodAddQuantity;
