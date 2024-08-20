import { createSlice } from "@reduxjs/toolkit";
import { isString, TFood, TStatus } from "@types";
import actGetFoodList from "./act/actGetFoodList";


interface IFoods {
    foodList: TFood[],
    status : TStatus,
    error: null | string
}

const initialState: IFoods = {
    foodList: [],
    status: "idle",
    error: null
}

const foodsSlice = createSlice({
    name:"foodList",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        builder.addCase(actGetFoodList.pending, (state) =>{
            state.status = "idle";
            state.error = null;
         }),
         builder.addCase(actGetFoodList.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.foodList = action.payload;
         }),
         builder.addCase(actGetFoodList.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) {
                state.error = action.payload;
            }
         })
    }
})

export {actGetFoodList}

export default foodsSlice.reducer