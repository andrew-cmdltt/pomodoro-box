import React from 'react';
import styles from './statisticpage.module.css';
import {DayOfWeekBlock} from "./DayOfWeekBlock";
import {ScheduleBlock} from "./ScheduleBlock";
import {Counters} from "./Counters";

export function StatisticPage() {
    return (
        <div className={styles.statisticPage}>
            <DayOfWeekBlock />
            <ScheduleBlock />
            <Counters />
        </div>
    );
}
