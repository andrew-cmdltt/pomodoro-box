import React from 'react';
import styles from './tasktimerblock.module.css';
import {TimerHeader} from "./TimerHeader";
import {TimerContent} from "./TimerContent";
import {UseTimerParams} from "../../../hooks/useTimer";

type Props = {
    timerParams: UseTimerParams
}

export function TaskTimerBlock({timerParams}: Props) {
    return (
        <>
            <div className={styles.taskTimerBlock}>
                <TimerHeader
                    timerParams={timerParams}
                />
                <TimerContent
                    timerParams={timerParams}/>
            </div>
        </>
    );
}
