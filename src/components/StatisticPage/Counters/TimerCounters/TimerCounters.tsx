import React from 'react';
import styles from './timercounters.module.css';
import {FocusIcon, StoppingIcon, TimeOnPauseIcon} from "../../../Icons";

export function TimerCounters() {
    return (
        <div className={styles.timerCounters}>
            <div className={styles.focusCounter}>
                <span className={styles.title}>Фокус</span>
                <span className={styles.value}>0%</span>
                <div className={styles.icon}>
                    <FocusIcon />
                </div>
            </div>
            <div className={styles.timeOnPauseCounter}>
                <span className={styles.title}>Время на паузе</span>
                <span className={styles.value}>0м</span>
                <div className={styles.icon}>
                    <TimeOnPauseIcon />
                </div>
            </div>
            <div className={styles.stoppingCounter}>
                <span className={styles.title}>Остановки</span>
                <span className={styles.value}>0</span>
                <div className={styles.icon}>
                    <StoppingIcon />
                </div>
            </div>
        </div>
    );
}
