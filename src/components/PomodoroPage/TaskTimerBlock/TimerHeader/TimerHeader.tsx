import React from 'react';
import styles from './timerheader.module.css';
import {getTimerClassName, Params} from "../../../../utils/getTimerHeaderClass";

type Props = {
    isWork: boolean
    isBreak: boolean
}

export function TimerHeader({isWork, isBreak}: Props) {
    const params: Params = {
        isStart: isWork,
        isBreak: isBreak,
        defaultClass: styles.timerHeader,
        onBreakClass: styles.break,
        onWorkClass: styles.work,
    }

    return (
        <div className={getTimerClassName(params)}>
            <div className={styles.taskTitle}>Сверстать сайт</div>
            <div className={styles.pomodoroNumber}>Помидор 1</div>
        </div>
    );
}
