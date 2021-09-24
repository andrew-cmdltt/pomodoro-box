import React from 'react';
import styles from './schedule.module.css';
import {Link, useParams} from "react-router-dom";
import {StatisticsByWeek} from "../../../../utils/getStatisticsByWeek";
import {getStatisticsByDayOfWeek} from "../../../../utils/getStatisticsByDayOfWeek";

type Params = {
    dayURI: string
    weekURI: string
}

type Props = {
    statisticsByWeek: StatisticsByWeek[],
}

export function Schedule({statisticsByWeek}: Props) {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const timeValues = ["1 ч 40", "1 ч 15", "50", "25"]

    const {dayURI, weekURI}: Params = useParams();

    const getHeight = (day: string) => {
        let height: number

        const seconds = getStatisticsByDayOfWeek(day, statisticsByWeek).task_execution_time

        if (seconds === 0 || seconds <= 60) {
            height = 5
        } else {
            height = seconds * 0.056
            if (height > 420) {
                height = 420
            }
        }

        return height
    }

    return (
        <div className={styles.schedule}>
            <div className={styles.dayOfWeekAxis}>
                <ul>
                    {days.map((day, index) => (
                        <Link to={`/statistics/week/${weekURI}/day/${day}`}>
                            <li key={index}>
                                {day === dayURI ? (
                                    <div
                                        className={styles.scale + " " + styles.scaleActive}
                                        style={{height: getHeight(day)}}
                                    />
                                ) : (
                                    <div className={styles.scale}
                                         style={{height: getHeight(day)}}
                                    />)}
                                {day === dayURI ? (<span className={styles.spanActive}>{day}</span>) : (
                                    <span>{day}</span>)}
                            </li>
                        </Link>
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
