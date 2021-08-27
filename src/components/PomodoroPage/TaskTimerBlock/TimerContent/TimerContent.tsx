import React from 'react';
import styles from './timercontent.module.css';
import {Timer} from "./Timer";

export function TimerContent() {
    return (
        <div className={styles.timerContent}>
            <Timer />
        </div>
    );
}
