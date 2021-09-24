import React from 'react';
import styles from './dayofweekaxis.module.css';
import {Link, useParams} from "react-router-dom";
import {Statistics} from "../../../../../utils/getStatisticsByWeek";
import {getHeight} from "../../../../../utils/getHeight";

type Params = {
    dayURI: "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс"
    weekURI: "current" | "last" | "2 weeks ago"
}

type Props = {
    statisticsByWeek: Statistics[],
}

export function DayOfWeekAxis({statisticsByWeek}: Props) {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const {dayURI, weekURI}: Params = useParams();

    return (
        <div className={styles.dayOfWeekAxis}>
            <ul>
                {days.map((day, index) => (
                    <Link to={`/statistics/week/${weekURI}/day/${day}`} key={index}>
                        <li key={index}>
                            {day === dayURI ? (
                                <div
                                    className={styles.scale + " " + styles.scaleActive}
                                    style={{height: getHeight(day, statisticsByWeek)}}
                                />
                            ) : (
                                <div className={styles.scale}
                                     style={{height: getHeight(day, statisticsByWeek)}}
                                />)}
                            {day === dayURI ? (<span className={styles.spanActive}>{day}</span>) : (
                                <span>{day}</span>)}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}