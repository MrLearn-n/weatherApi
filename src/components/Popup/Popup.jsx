import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../store/slices/modalPopupSlice';
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector';
import { ThisDayItem } from '../ThisDaysInfo/ThisDayItem';
import style from './Popup.module.scss';


export const Popup = ({ data }) => {



    const dispatch = useDispatch();

    const hidePopiup = () => {
        dispatch(showModal(false));
    }


    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            // value: `${data[0]?.day.maxtemp_c}° - ощущается как ${data[0]?.day.avgtemp_c}°`,
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
            // value: `${data[0]?.day.maxwind_kph} км/ч`,
        },
    ];

    

    return (
        <>
            <div className={style.blur} />
            <div className={style.popup}>
                {data?.map((item) => (
                    <>
                        <div className={style.day}>
                            <div className={style.day__temp}>{item.day.maxtemp_c}°</div>
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
                                <ThisDayItem item={item} key={item.icon_id} />
                            ))}
                        </div>
                        <div className={style.close} onClick={hidePopiup}>
                            <GlobalSvgSelector id='close' />
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
