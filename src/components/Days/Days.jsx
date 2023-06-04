import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDayData } from '../../store/slices/fetchWeatherSlice';
import { showModal } from '../../store/slices/modalPopupSlice';
import { Card } from './Card';
import style from './Days.module.scss'
import { Tabs } from './Tabs'

export const Days = ({data}) => {
    const { forecast } = data;
    const dataWeek = forecast?.forecastday;
    const dispatch = useDispatch();
    const [state, setState] = useState();
 
    const showPopup = () => {
        dispatch(showModal(true));
      }

    useEffect(() => {
        dispatch(getDayData(state));
    }, [state])

    
    const days = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'small_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Сб',
            day_info: '28 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Вс',
            day_info: '28 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];


    return (
        <>
            {dataWeek ? 
                (<div className={style.days} onClick={showPopup}>
                    {dataWeek.map(day => (
                        <div className='' onClick={() => {setState(day.date)}} key={day.date}>
                            <Card day={day}/>
                        </div>
                    ))}         
                </div>)
                : (<div className=''>Ничего не найдено</div>)
            }
        </>
    )
}
