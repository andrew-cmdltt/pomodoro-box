import React from 'react';
import styles from './counters.module.css';
import {PomodoroCounter} from "./PomodoroCounter";
import {TimerCounters} from "./TimerCounters";

export function Counters() {
    return (
        <div className={styles.counters}>
            <PomodoroCounter />
            <TimerCounters />
        </div>

    );
}
