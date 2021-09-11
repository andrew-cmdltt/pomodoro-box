import React from 'react';
import styles from './timercontent.module.css';
import {Timer} from "./Timer";

type Props = {
    pomodoroCount: number
    minutes: number
    seconds: number
    handleStart: () => void
    handlePause: () => void
    handleIncreaseTime: () => void
    isBreak: boolean
    isWork: boolean
    isPause: boolean
}

export function TimerContent(props: Props) {
    return (
        <div className={styles.timerContent}>
            <Timer pomodoroCount={2}
                   handleIncreaseTime={props.handleIncreaseTime}
                   handleStart={props.handleStart}
                   handlePause={props.handlePause}
                   minutes={props.minutes}
                   seconds={props.seconds}
                   isBreak={props.isBreak}
                   isWork={props.isWork}
                   isPause={props.isPause}
            />
        </div>
    );
}
