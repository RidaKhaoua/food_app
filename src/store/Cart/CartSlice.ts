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
    reducers: {}

})

export default cartSlice.reducer;