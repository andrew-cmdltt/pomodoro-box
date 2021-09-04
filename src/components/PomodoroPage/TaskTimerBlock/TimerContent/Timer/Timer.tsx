import React from 'react';
import styles from './timer.module.css';

export function Timer() {
    return (
        <div className={styles.timer}>
            <div className={styles.timerValue}>
                25:00
            </div>
            <div className={styles.timerLabel}>
                <div className={styles.taskNumber}>
                    Задача 1 - <br/>
                </div>
                <div className={styles.taskTitle}>
                    Сверстать сайт
                </div>
            </div>
            <div className={styles.timerControls}>
                <button className={styles.startButton}>Старт</button>
                <button className={styles.stopButton}>Стоп</button>
            </div>
            <div className={styles.renewalButton}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#C4C4C4"/>
                    <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
}
