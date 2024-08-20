import { actGetFoodList } from "@store/foods/foodsSlice";
import { useAppDispatch, useAppSelectore } from "@store/hooks"
import { useEffect } from "react";

const useFoodList = () => {
    const dispatch = useAppDispatch();
    const {foodList, error, status} = useAppSelectore(state => state.foodList);


    useEffect(()=> {
        const promise = dispatch(actGetFoodList());
        return () => {
            promise.abort();
        }
    },[dispatch])

    return {
        foodList,
        error,
        status
    }
}

export default useFoodList