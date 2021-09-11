import React, {useEffect, useState} from 'react';
import styles from './timer.module.css';
import {getTimerValue} from "../../../../../utils/getTimerValue";

type Props = {
    pomodoroCount: number
}

export function Timer({pomodoroCount}: Props) {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(60)

    const [isStated, setIsStated] = useState(false)

    const handleStart = () => {
        setIsStated(true)
        setMinutes(minutes => minutes - 1);
    }

    const handleStop = () => {
        setIsStated(false)
    }

    const handleIncreaseTime = () => {
        setMinutes(minutes => minutes + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isStated) {
                setSeconds(seconds => seconds - 1);
                if (seconds === 0) {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(60);
                    if (minutes === 0) {
                        setMinutes(24);
                    }
                }
            }
        }, 50);
        return () => clearInterval(interval);
    }, [isStated, minutes, seconds]);

    return (
        <div className={styles.timer}>
            <div className={styles.timerValue}>
                {getTimerValue(minutes, seconds)}
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
                <button className={styles.startButton} onClick={handleStart}>Старт</button>
                <button className={styles.stopButton} onClick={handleStop}>Стоп</button>
            </div>
            <div className={styles.renewalButton} onClick={handleIncreaseTime}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#C4C4C4"/>
                    <path
                        d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z"
                        fill="white"/>
                </svg>
            </div>
        </div>
    );
}
