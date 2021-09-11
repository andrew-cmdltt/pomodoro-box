import React, {useEffect, useState} from 'react';
import styles from './tasktimerblock.module.css';
import {TimerHeader} from "./TimerHeader";
import {TimerContent} from "./TimerContent";

export function TaskTimerBlock() {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(60)

    const [isWork, setIsWork] = useState(false)
    const [isBreak, setIsBreak] = useState(false)
    const [isPause, setIsPause] = useState(false)

    const handleStart = () => {
        setIsWork(true)
        setMinutes(minutes => minutes - 1);
    }

    const handlePause = () => {
        setIsPause(!isPause)
    }

    const handleIncreaseTime = () => {
        setMinutes(minutes => minutes + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isWork && !isPause) {
                setSeconds(seconds => seconds - 1);
                if (seconds === 0) {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(60);
                    if (minutes === 0) {
                        if (isBreak) {
                            setIsBreak(false)
                            setMinutes(24);
                        } else {
                            setIsBreak(true)
                            setMinutes(4)
                        }
                    }
                }
            }
        }, 5);
        return () => clearInterval(interval);
    }, [isBreak, isPause, isWork, minutes, seconds]);

    return (
        <div className={styles.taskTimerBlock}>
            <TimerHeader isBreak={isBreak} isWork={isWork}/>
            <TimerContent
                pomodoroCount={2}
                handleIncreaseTime={handleIncreaseTime}
                handleStart={handleStart}
                handlePause={handlePause}
                minutes={minutes}
                seconds={seconds}
                isBreak={isBreak}
                isWork={isWork}
                isPause={isPause}
            />
        </div>
    );
}
