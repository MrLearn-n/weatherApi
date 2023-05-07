import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecastWeatherData, getWeatherData } from '../../store/slices/fetchWeatherSlice';
import { Days } from '../Days/Days';
import { ThisDay } from '../ThisDays/ThisDay';
import { ThisDayInfo } from '../ThisDaysInfo/ThisDayInfo';
import style from './Home.module.scss';

export const Home = () => {
    const dispatch = useDispatch();
    const { list, week, isLoading } = useSelector(({ weather }) => weather);
    useEffect(() => {
        dispatch(getWeatherData())
    }, [dispatch])

    useEffect(() => {
        dispatch(getForecastWeatherData());
    }, [dispatch])

    return (
        <div className={style.home}>
            <div className={style.wrapper}>
                <ThisDay data={list}/>
                <ThisDayInfo data={list}/>
            </div>
            {!isLoading ?
                (<Days data={week}/>) 
                :
                (<div className=''>Loading...</div>)
            }   
        </div>
    )
}
