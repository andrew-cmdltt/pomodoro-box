import React from 'react';
import styles from './schedule.module.css';
import {Link, useParams} from "react-router-dom";

type Params = {
    dayURI: string
    weekURI: string
}

export function Schedule() {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const timeValues = ["1 ч 40", "1 ч 15", "50", "25"]

    const {dayURI}: Params = useParams();

    return (
        <div className={styles.schedule}>
            <div className={styles.dayOfWeekAxis}>
                <ul>
                    {days.map((day, index) => (
                        <li key={index}>
                            {day === dayURI ? (<span className={styles.spanActive}>{day}</span>) : (<span>{day}</span>)}
                            <Link to={`/statistics/week/current/day/${day}`}>
                                {day === dayURI ? (
                                    <div className={styles.scale + " " + styles.scaleActive}/>
                                ) : (
                                    <div className={styles.scale}/>)}
                            </Link>
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
