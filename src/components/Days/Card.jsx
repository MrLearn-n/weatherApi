import React from 'react';
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector';
import style from './Days.module.scss';

export const Card = ({ day }) => {
    const date = new Date(day.date);
    let dayName  = date.toLocaleDateString('ru-RU', {weekday: 'long'});
    let monthName = date.toLocaleString('ru-RU', {month: 'long'});
    let dayNumber = date.getDate();
    

    function getDayName(i) {
        // switch (i) {
        //     case 3:
        //         return 'Сегодня';
        //     case 4:
        //         return 'Завтра';
        //     case 5:
        //         return 'Пятница';
        //     case 6:
        //         return 'Суббота';
        //     case 0:
        //         return 'Воскресенье';
        //     case 1:
        //         return 'Понедельник';
        //     case 2:
        //         return 'Вторник';
        //     default:
        //         return;
        // }
    }

    return (
        <div className={style.card}>
            <div className={style.day}>{dayName}</div>
            <div className={style.day__info}>{dayNumber} {monthName}</div>
            <div className={style.img}>
                <GlobalSvgSelector id={day.day.condition.text} />
            </div>
            <div className={style.temp__day}>{day.day.maxtemp_c}°</div>
            <div className={style.temp__night}>{day.day.mintemp_c}°</div>
            <div className={style.info}>{day.day.condition.text}</div>
        </div>
    )
}
