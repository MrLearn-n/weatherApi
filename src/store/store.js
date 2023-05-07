import { configureStore } from "@reduxjs/toolkit";
import fetchWeatherSlice from "./slices/fetchWeatherSlice";
import modalPopupSlice from "./slices/modalPopupSlice";

export const store = configureStore({
    reducer: {
        weather: fetchWeatherSlice,
        modal: modalPopupSlice, 
    },
}) 