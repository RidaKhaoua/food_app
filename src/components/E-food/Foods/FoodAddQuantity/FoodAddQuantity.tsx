import { assets } from "@assets";

import styles from "./style.module.css";
import useCart from "@hooks/useCart";

const { food_add_quantity, food_counter, food_quantity } = styles;

type TFoodAddQuantity = {
  id: number | string
}

function FoodAddQuantity({id}: TFoodAddQuantity) {
  const {status, error, foodIdAndQuantity, handleAddFood, handleMinusFood} = useCart();

  return (
    <div className={food_quantity}>
      {!foodIdAndQuantity[id] ? (
        <div className={food_add_quantity} onClick={() => handleAddFood(id)}>
          <img src={assets.add_icon_white} alt="acon add" />
        </div>
      ) : (
        <div className={food_counter}>
          <img
            src={assets.remove_icon_red}
            alt="icon plus"
            onClick={() => handleMinusFood(id)}
          />
          <p>{foodIdAndQuantity[id]}</p>
          <img
            src={assets.add_icon_green}
            alt="icon minus"
            onClick={() => handleAddFood(id)}
          />
        </div>
      )}
    </div>
  );
}

export default FoodAddQuantity;
