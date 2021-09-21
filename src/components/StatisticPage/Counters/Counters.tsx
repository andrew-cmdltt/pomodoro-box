import React from 'react';
import styles from './counters.module.css';
import {PomodoroCounter} from "./PomodoroCounter";
import {TimerCounters} from "./TimerCounters";

type Props = {
    pomodoroCount: number
}

export function Counters({pomodoroCount}: Props) {
    return (
        <div className={styles.counters}>
            <PomodoroCounter pomodoroCount={pomodoroCount}/>
            <TimerCounters />
        </div>
    );
}
