import React from 'react';
import styles from './timerheader.module.css';

export function TimerHeader() {
    return (
        <div className={styles.timerHeader}>
            <div className={styles.taskTitle}>Сверстать сайт</div>
            <div className={styles.pomodoroNumber}>Помидор 1</div>
        </div>
    );
}
