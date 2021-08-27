import React from 'react';
import styles from './pomodoropage.module.css';
import {Instruction} from "./Instruction";

export function PomodoroPage() {
    return (
        <div className={styles.pomodoro}>
            <Instruction />
        </div>
    );
}
