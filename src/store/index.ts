import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categorieSlice";
import foodList from "./foods/foodsSlice";

const store = configureStore({
    reducer: {
        categories,
        foodList
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
    store
}