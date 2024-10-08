import { createAsyncThunk } from "@reduxjs/toolkit";
import { TFood } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


const actGetFoodList = createAsyncThunk("foodList/actGetFoodList", async(_, thunkAPI) => {
        const {rejectWithValue, signal} = thunkAPI;
        try {
            const response = axios.get<TFood[]>("/foodList", {signal});
            return (await response).data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
})

export default actGetFoodList