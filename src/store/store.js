import { configureStore } from "@reduxjs/toolkit";
import fetchWeatherSlice from "./slices/fetchWeatherSlice";

export const store = configureStore({
    reducer: {
        weather: fetchWeatherSlice,
    },
}) 