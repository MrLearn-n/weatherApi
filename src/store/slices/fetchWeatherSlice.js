import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: {},
    week: {},
    isLoading: false,
};

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async() => {
    const { data } =  await axios.get('http://api.weatherapi.com/v1/current.json?key=3b7f6cd264cb4b428f4185012232504&q=Александровское&aqi=yes');
    return data;
});

export const getForecastWeatherData = createAsyncThunk('weather/getForecastWeatherData', async() => {
    const {data} = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=3b7f6cd264cb4b428f4185012232504&q=Александровское&days=7&aqi=no&alerts=no');
    return data;
}); 

const fetchWeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: {
        [getWeatherData.pending]: (state) => {
            state.list = {};
            state.isLoading = true;
        },
        [getWeatherData.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        },
        [getWeatherData.rejected]: (state) => {
            state.isLoading = false;
        },
        [getForecastWeatherData.pending]: (state) => {
            state.week = {};
            state.isLoading = true;
        },
        [getForecastWeatherData.fulfilled]: (state, action) => {
            state.week = action.payload;
            state.isLoading = false;
        }
    },
});

export default fetchWeatherSlice.reducer;