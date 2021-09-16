import React from 'react';
import styles from './statisticpage.module.css';
import {DayOfWeekBlock} from "./DayOfWeekBlock";
import {ScalesBlock} from "./ScalesBlock";

export function StatisticPage() {
    return (
        <div className={styles.statisticPage}>
            <DayOfWeekBlock />
            <ScalesBlock />
        </div>
    );
}
