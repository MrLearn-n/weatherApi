import React, { useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../assets/icons/GlobalSvgSelector';
import style from './Header.module.scss';

export const Header = () => {
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' },
    ]

    const [value, setValue] = useState('');

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

    const handleChangeValue = (e) => {
        setValue(e.target.value);
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
                    inputValue={value}
                    options={options}
                    styles={colorStyle}
                />
            </div>
        </header>
    )
}
