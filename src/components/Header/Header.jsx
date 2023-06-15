import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { changeTheme } from '../../store/slices/changeThemeSlice';
import { getForecastWeatherData, getWeatherData } from '../../store/slices/fetchWeatherSlice';
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector';
import style from './Header.module.scss';

export const Header = () => {
    const dispatch = useDispatch();
    const currentCityName = localStorage.getItem('city');
    const storageTheme = localStorage.getItem('theme');

    const [value, setValue] = useState(currentCityName);
    const currentTheme = useSelector(state => state.theme);
    const { theme  } = currentTheme;

    useEffect(() => {
        localStorage.setItem('city', value);
    }, [value])

    useEffect(() => {
        dispatch(getWeatherData(value))
    }, [dispatch, value])

    useEffect(() => {
        dispatch(getForecastWeatherData(value));
    }, [dispatch, value])


    const options = [
        { value: 'Saint Petersburg', label: 'Санкт-Петербург' },
        { value: 'Лондон', label: 'Лондон' },
        { value: 'Париж', label: 'Париж' },
        { value: 'Москва', label: 'Москва' },
        { value: 'Новгород', label: 'Новгород' },
        { value: 'Дербент', label: 'Дербент' },
        { value: 'Ставрополь', label: 'Ставрополь' },
        { value: 'Пятигорск', label: 'Пятигорск' },
    ]


    const colorStyle = {
        control: (styles) => ( {
            ...styles,
            backgroundColor: storageTheme === 'dark' ? '#4F4F4F' : '#DAE9FF',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color:  storageTheme === 'dark' ? '#fff' : '#000',
        }),
        input: (styles) => ({
            ...styles,
            color:  storageTheme === 'dark' ? '#fff' : '#000',
        })
    }

    const handleChangeValue = (selectOption) => {
        setValue(selectOption.value);
    }

    const handleChangeTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        dispatch(changeTheme(nextTheme))
    }

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={style.title}>Weather Service</div>
            </div>
            <div className={style.wrapper}>
                <div 
                    className={style.change_theme}
                    onClick={() => {}}
                >
                    <div onClick={handleChangeTheme}>
                        <GlobalSvgSelector id='change-theme' />
                    </div>
                </div>
                <CreatableSelect 
                    styles={colorStyle}
                    options={options}
                    onChange={handleChangeValue}
                />
            </div>
        </header>
    )
}
