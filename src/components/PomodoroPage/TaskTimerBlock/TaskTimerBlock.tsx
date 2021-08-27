import React from 'react';
import styles from './tasktimerblock.module.css';
import {TimerHeader} from "./TimerHeader";
import {TimerContent} from "./TimerContent";

export function TaskTimerBlock() {
    return (
        <div className={styles.taskTimerBlock}>
            <TimerHeader/>
            <TimerContent />
        </div>
    );
}
