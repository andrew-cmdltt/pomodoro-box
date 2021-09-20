import React from 'react';
import styles from './schedule.module.css';

export function Schedule() {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const timeValues = ["1 ч 40", "1 ч 15", "50", "25"]

    return (
        <div className={styles.schedule}>
            <div className={styles.dayOfWeekAxis}>
                <ul>
                    {days.map((day, index) => (
                        <li key={index}>
                            <span>{day}</span>
                            <div className={styles.scale} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.timeAxis}>
                <ul>
                    {timeValues.map((timeValue, index) => (
                        <li key={index}>
                            <div className={styles.divider}/>
                            <span>{timeValue} мин</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
