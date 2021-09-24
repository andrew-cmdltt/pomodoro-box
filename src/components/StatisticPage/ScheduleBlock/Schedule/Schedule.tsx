import React from 'react';
import styles from './schedule.module.css';
import {StatisticsByWeek} from "../../../../utils/getStatisticsByWeek";
import {DayOfWeekAxis} from "./DayOfWeekAxis";
import {TimeAxis} from "./TimeAxis";

type Props = {
    statisticsByWeek: StatisticsByWeek[],
}

export function Schedule({statisticsByWeek}: Props) {
    return (
        <div className={styles.schedule}>
            <DayOfWeekAxis statisticsByWeek={statisticsByWeek}/>
            <TimeAxis/>
        </div>
    );
}
