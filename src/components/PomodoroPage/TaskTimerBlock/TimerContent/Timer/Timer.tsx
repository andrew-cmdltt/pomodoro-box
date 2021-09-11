import React from 'react';
import styles from './timer.module.css';
import {getTimerValue} from "../../../../../utils/getTimerValue";
import {IncreaseTimeIcon} from "../../../../Icons/IncreaseTimeIcon";

type Props = {
    pomodoroCount: number
    minutes: number
    seconds: number
    handleStart: () => void
    handleStop: () => void
    handleIncreaseTime: () => void
    isBreak: boolean
    isStart: boolean
}

export function Timer(props: Props) {
    return (
        <div className={styles.timer}>
            <div className={styles.timerValue}>
                {getTimerValue(props.minutes, props.seconds)}
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
                <button className={styles.startButton} onClick={props.handleStart}>Старт</button>
                <button className={styles.stopButton} onClick={props.handleStop}>Стоп</button>
            </div>
            <div className={styles.renewalButton} onClick={props.handleIncreaseTime}>
                <IncreaseTimeIcon />
            </div>
        </div>
    );
}
