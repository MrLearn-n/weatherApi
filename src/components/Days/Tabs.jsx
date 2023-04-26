import React from 'react';
import style from './Days.module.scss';


export const Tabs = () => {
    const tabs = [
        {
            value: "На неделю",
        },
        {
            value: "На 10 дней",
        },
        {
            value: "На месяц",
        },
    ];

    return (
        <div className={style.tabs}>
            <div className={style.tabs__wrapper}>
                {tabs.map(tab => (
                    <div className={style.tab} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
        </div>
    )
}
