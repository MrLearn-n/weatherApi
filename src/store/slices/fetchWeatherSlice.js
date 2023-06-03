import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: {},
    dayList: {},
    week: {},
    isLoading: false,
};

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async(city) => {
    const { data } =  await axios.get(`http://api.weatherapi.com/v1/current.json?key=c36fd7300d2345e2ab563435230306&q=${city}&aqi=yes`);
    return data;
});

export const getForecastWeatherData = createAsyncThunk('weather/getForecastWeatherData', async(city) => {
    const {data} = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=c36fd7300d2345e2ab563435230306&q=${city}&days=7&aqi=no&alerts=no`);
    return data;
}); 

// export const getThisDayWeatherData = createAsyncThunk('weather/getThisDayWeatherData', async(date) => {
//     const { data } = await axios.get(`http://api.weatherapi.com/v1/history.json?key=3b7f6cd264cb4b428f4185012232504&q=London&dt=${date}`);
//     return data;
// })

const fetchWeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getDayData: (state, action) => {
            state.dayList = state.week?.forecast?.forecastday.map(item => item).filter(el => el.date == action.payload)
        }
    },
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
        },
    },
});

export const { getDayData } = fetchWeatherSlice.actions;
export default fetchWeatherSlice.reducer;