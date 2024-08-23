import { addFoodToCart, minusFoodToCart } from "@store/Cart/cartSlice";
import { useAppDispatch, useAppSelectore } from "@store/hooks"

const useCart = () => {
    const dispatch = useAppDispatch();

    const {status, error, foodIdAndQuantity, foods} = useAppSelectore(state => state.cart);

    const handleAddFood = (id: number | string) => {
        dispatch(addFoodToCart(id));
    }

    const handleMinusFood = (id:number | string) => {
        dispatch(minusFoodToCart(id));
    }

    return {
        status,
        error,
        foodIdAndQuantity,
        handleAddFood,
        handleMinusFood
    }
}

export default useCart