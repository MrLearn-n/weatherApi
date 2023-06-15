import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDayData } from "../../store/slices/fetchWeatherSlice";
import { showModal } from "../../store/slices/modalPopupSlice";
import { Card } from "./Card";
import style from "./Days.module.scss";


export const Days = ({ data }) => {
    const { forecast } = data;
    const dataWeek = forecast?.forecastday;
    const dispatch = useDispatch();
    const [state, setState] = useState();

    const showPopup = () => {
        dispatch(showModal(true));
    };

    useEffect(() => {
        dispatch(getDayData(state));
    }, [dispatch, state]);

    return (
        <>
            {dataWeek ? (
                <div className={style.days} onClick={showPopup}>
                    {dataWeek.map((day) => (
                        <div
                            className=""
                            onClick={() => {
                                setState(day.date);
                            }}
                            key={day.date}
                        >
                            <Card day={day} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="">Ничего не найдено</div>
            )}
        </>
    );
};
