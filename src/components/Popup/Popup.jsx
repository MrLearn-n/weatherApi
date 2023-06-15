import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/slices/modalPopupSlice";
import { GlobalSvgSelector } from "../assets/icons/GlobalSvgSelector";
import { ThisDayItem } from "../ThisDaysInfo/ThisDayItem";
import style from "./Popup.module.scss";

export const Popup = () => {
    const dispatch = useDispatch();
    const currentDay = useSelector((state) => state.weather.list);
    const data = useSelector((state) => state.weather.dayList);
    const hidePopiup = () => {
        dispatch(showModal(false));
    };

    const items = [
        {
            icon_id: "temp",
            name: "Температура",
            value: `${data?.map(
                (item) => item?.day?.maxtemp_c
            )} ° - max  ${data?.map((item) => item?.day?.mintemp_c)} ° - min`,
        },
        {
            icon_id: "perssure",
            name: "Давление",
            value: `${data?.map(
                (item) => item?.day?.avghumidity
            )} значение влажности`,
        },
        {
            icon_id: "precipitation",
            name: "Осадки",
            value: `${data?.map(
                (item) => item?.day?.totalprecip_mm
            )} мм ртутного столба`,
        },
        {
            icon_id: "wind",
            name: "Ветер",
            value: `${data?.map((item) => item?.day?.maxwind_kph)} км/ч`,
        },
    ];

    return (
        <>
            <div className={style.blur} />
            <div className={style.popup}>
                {data?.map((item, index) => {
                    let date = new Date(item.date);
                    let monthName = date.toLocaleString("ru-RU", {
                        month: "long",
                    });
                    let dayNumber = date.getDate();

                    return (
                        <div className={style.body_popup} key={index}>
                            <div className={style.day}>
                                <div className={style.day__temp}>
                                    {item.day.maxtemp_c}°
                                </div>
                                <div className={style.img}>
                                    <GlobalSvgSelector
                                        id={item.day.condition.text}
                                    />
                                </div>
                                <div className={style.day__name}>
                                    {dayNumber} {monthName}
                                </div>
                                <div className={style.day__city}>
                                    Город:{" "}
                                    <span>{currentDay?.location.name}</span>
                                </div>
                            </div>
                            <div className={style.this__day_info_items}>
                                {items?.map((item) => (
                                    <ThisDayItem
                                        item={item}
                                        key={item.icon_id}
                                    />
                                ))}
                            </div>
                            <div className={style.close} onClick={hidePopiup}>
                                <GlobalSvgSelector id="close" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
