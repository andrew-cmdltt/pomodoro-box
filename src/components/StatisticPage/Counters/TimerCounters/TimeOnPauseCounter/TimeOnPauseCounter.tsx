import React from 'react';
import styles from './timeonpausecounter.module.css';
import {TimeOnPauseIcon} from "../../../../Icons";

type Props = {
  timeOnPause: number
}

export function TimeOnPauseCounter({timeOnPause}: Props) {
  const timeOnPauseCounterClass = timeOnPause ? styles.timeOnPauseCounter + " " + styles.isTimeOnPause : styles.timeOnPauseCounter
  const iconIsTimeOnPauseClass = timeOnPause ? styles.icon + " " + styles.isTimeOnPause : styles.icon

  return (
        <div className={timeOnPauseCounterClass}>
            <span className={styles.title}>Время на паузе</span>
            <span className={styles.value}>{timeOnPause ? timeOnPause : 0}м</span>
            <div className={iconIsTimeOnPauseClass}>
                <TimeOnPauseIcon/>
            </div>
        </div>
    );
}
