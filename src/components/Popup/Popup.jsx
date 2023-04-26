import React from 'react';
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector';
import { ThisDayItem } from '../ThisDaysInfo/ThisDayItem';
import style from './Popup.module.scss';


export const Popup = () => {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          icon_id: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
        },
      ];

    return (
        <>
            <div className={style.blur} />
            <div className={style.popup}>
                <div className={style.day}>
                    <div className={style.day__temp}>20°</div>
                    <div className={style.day__name}>Среда</div>
                    <div className={style.img}>
                        <GlobalSvgSelector id='sun' />
                    </div>
                    <div className={style.day__time}>
                        Время: <span>21:54</span>
                    </div>
                    <div className={style.day__city}>
                        Город: <span>Санкт-Петербург</span>
                    </div>
                </div>
                <div className={style.this__day_info_items}>
                    {items.map((item) => (
                        <ThisDayItem item={item} key={item.icon_id}/>
                    ))}
                </div>
                <div className={style.close}>
                    <GlobalSvgSelector id='close'/>
                </div>
            </div>
        </>
    )
}
