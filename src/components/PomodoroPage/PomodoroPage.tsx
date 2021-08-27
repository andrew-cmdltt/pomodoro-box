import React from 'react';
import styles from './pomodoropage.module.css';
import {TaskTimerBlock} from "./TaskTimerBlock";
import {TasksBlock} from "./TasksBlock";

export function PomodoroPage() {
    return (
        <div className={styles.pomodoroPage}>
            <TasksBlock />
            <TaskTimerBlock />
        </div>
    );
}
