import React from 'react';
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector';
import style from './ThisDayInfo.module.scss';

export const ThisDayItem = ({ item }) => {
    const { icon_id, name, value } = item;

    return (
        <div className={style.item}>
            <div className={style.indicator}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={style.indicator__name}>{name}</div>
            <div className={style.indicator__value}>{value}</div>
        </div>
    )
}
