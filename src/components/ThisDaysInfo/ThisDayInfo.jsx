import React from 'react';
import cloud from './../../components/assets/images/cloud.png';
import style from './ThisDayInfo.module.scss';
import { ThisDayItem } from './ThisDayItem';

export const ThisDayInfo = ({data}) => {
    const { location, current } = data;

    const item = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${current?.temp_c}° - ощущаеться как ${current?.feelslike_c}°`,
        },
        {
            icon_id: 'perssure',
            name: 'Давление',
            value: `${current?.pressure_mb} мм ртутного столба`,
        },        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${(current?.precip_mm > 0) ? `${current?.precip_mm} мм` : 'Без осадков'}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${current?.wind_kph} км/ч, направление - ${current?.wind_dir}`,
        },
    ];

    return (
        <div className={style.this__day_info}>
            <div className={style.this__day_info_items}>
                {item.map((el) => (
                    <ThisDayItem key = {el.icon_id} item={el}/>
                ))}
            </div>
            <img className={style.cloud__img} src={cloud}  alt='sky'/>
        </div>
    )
}
