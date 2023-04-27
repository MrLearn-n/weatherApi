import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { getForecastWeatherData, getWeatherData } from '../../store/slices/fetchWeatherSlice';
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector';
import style from './Header.module.scss';

export const Header = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('Санкт-Петербург');


    useEffect(() => {
        dispatch(getWeatherData(value))
    }, [value])

    useEffect(() => {
        dispatch(getForecastWeatherData(value));
    }, [value])


    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Лондон' },
        { value: 'city-3', label: 'Париж' },
        { value: 'city-4', label: 'Москва' },
        { value: 'city-5', label: 'Новгород' },
        { value: 'city-6', label: 'Дербент' },
        { value: 'city-7', label: 'Ставрополь' },
        { value: 'city-8', label: 'Пятигорск' },
    ]


    const colorStyle = {
        control: (styles) => ( {
            ...styles,
            backgroundColor: '#DAE9FF',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: '#000',
        })
    }

    const handleChangeValue = (selectOption) => {
        setValue(selectOption.label);
    }

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={style.title}>React Weather</div>
            </div>
            <div className={style.wrapper}>
                <div 
                    className={style.change_theme}
                    onClick={() => {}}
                >
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select 
                    defaultValue={options[0]}
                    options={options}
                    onChange={handleChangeValue}
                    styles={colorStyle}
                />
            </div>
        </header>
    )
}
