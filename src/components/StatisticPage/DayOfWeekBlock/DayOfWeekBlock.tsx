import React from 'react';
import styles from './dayofweekblock.module.css';
import {StatisticsByWeek} from "../../../utils/getStatisticsByWeek";
import {getDayOfWeekByAbbreviated} from "../../../utils/getDayOfWeekByAbbreviated";
import {secondsToHm} from "../../../utils/secondsToHm";

type Props = {
    statisticsByDayOfWeek: StatisticsByWeek,
    dayURI: string
}

export function DayOfWeekBlock({statisticsByDayOfWeek, dayURI}: Props) {
    const dayOfWeek = getDayOfWeekByAbbreviated(dayURI)

    return (
        <div className={styles.dayOfWeekBlock}>
            <div className={styles.title}>
                Ваша активность
            </div>
            <div className={styles.weekOfDayCard}>
                <div className={styles.cardTitle}>
                    {dayOfWeek}
                </div>
                <div className={styles.cardDescription}>
                    {statisticsByDayOfWeek.dayOfWeek ? (
                        <>
                            <div>Вы работали над задачами</div>
                            в течение <span>
                            {secondsToHm(statisticsByDayOfWeek.total_time, "full")}
                            </span>
                        </>
                    ) : "Нет данных"}
                </div>
            </div>
        </div>
    );
}
