import React from 'react';
import styles from './timercontent.module.css';
import {Timer} from "./Timer";

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

export function TimerContent(props: Props) {
    return (
        <div className={styles.timerContent}>
            <Timer pomodoroCount={2}
                   handleIncreaseTime={props.handleIncreaseTime}
                   handleStart={props.handleStart}
                   handleStop={props.handleStop}
                   minutes={props.minutes}
                   seconds={props.seconds}
                   isBreak={props.isBreak}
                   isStart={props.isStart}/>
        </div>
    );
}
