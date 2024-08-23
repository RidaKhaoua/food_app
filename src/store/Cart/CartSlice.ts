import { createSlice } from "@reduxjs/toolkit";
import { TFood, TStatus } from "@types";


interface ICart {
    foodIdAndQuantity : {[keyof: string]: number};
    foods: TFood[];
    status: TStatus;
    error: null | string
}

const initialState: ICart = {
    foodIdAndQuantity: {},
    foods: [],
    status: "idle",
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addFoodToCart: (state, action) => {
            const id = action.payload;
            if(state.foodIdAndQuantity[id]) {
                state.foodIdAndQuantity[id] +=1;
            }else {
                state.foodIdAndQuantity[id] = 1
            }
        },
        
        minusFoodToCart: (state, action) => {
            const id = action.payload;
            if(state.foodIdAndQuantity[id] > 0) {
                state.foodIdAndQuantity[id] -=1;
            }
        }
    }

})
export const {addFoodToCart, minusFoodToCart} = cartSlice.actions;
export default cartSlice.reducer;