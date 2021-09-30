import React from 'react';
import styles from './tasktimerblock.module.css';
import {TimerHeader} from "./TimerHeader";
import {TimerContent} from "./TimerContent";
import {UseTimerParams} from "../../../hooks/useTimer";
import {useLocation} from "react-router-dom";

type Props = {
    timerParams: UseTimerParams
}

export function TaskTimerBlock({timerParams}: Props) {
    let location = useLocation()

    const isHiddenClass = location.pathname !== "/" ? styles.taskTimerBlock + " " + styles.hidden : styles.taskTimerBlock

    return (
        <div className={isHiddenClass}>
            <TimerHeader
                timerParams={timerParams}
            />
            <TimerContent
                timerParams={timerParams}/>
        </div>
    );
}
