import React from 'react';
import styles from './statisticpage.module.css';
import {DayOfWeekBlock} from "./DayOfWeekBlock";
import {log} from "util";

export function StatisticPage() {
    console.log("statistic page")
    return (
        <div className={styles.statisticPage}>
            <DayOfWeekBlock />
            ScalesBlock
            Counters
        </div>
    );
}
