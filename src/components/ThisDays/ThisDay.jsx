import React from 'react'
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector'
import style from './ThisDay.module.scss'

export const ThisDay = ({data}) => {
    const { location, current } = data;
    const time = new Date(location?.localtime);;
    
    function checkTime (i) {
        return (i < 10) ? "0" + i : i;
    }

    let h = checkTime(time.getHours());
    let m = checkTime(time.getMinutes());

    return (
        <div className={style.this__day}>
            <div className={style.top__block}>
                <div className={style.top__block_wrapper}>
                    <div className={style.this__temp}>{current?.temp_c}°</div>
                    <div className={style.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id={current?.condition?.text} />
            </div>
            <div className={style.bottom__block}>
                <div className={style.this__time}>
                    Время: <span>{`${!h ? 'X' : h}:${!m ? 'X' : m}`}</span>
                </div>
                <div className={style.this__city}>
                    Город: <span>{location?.name}</span>
                </div>
            </div>
        </div>
    )
}
