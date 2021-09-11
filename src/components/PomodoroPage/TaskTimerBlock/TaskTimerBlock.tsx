import React, {useEffect, useState} from 'react';
import styles from './tasktimerblock.module.css';
import {TimerHeader} from "./TimerHeader";
import {TimerContent} from "./TimerContent";

export function TaskTimerBlock() {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(60)

    const [isStart, setIsStart] = useState(false)
    const [isBreak, setIsBreak] = useState(false)

    const handleStart = () => {
        setIsStart(true)
        setMinutes(minutes => minutes - 1);
    }

    const handleStop = () => {
        setIsStart(false)
    }

    const handleIncreaseTime = () => {
        setMinutes(minutes => minutes + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isStart) {
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
    }, [isBreak, isStart, minutes, seconds]);

    return (
        <div className={styles.taskTimerBlock}>
            <TimerHeader/>
            <TimerContent
                pomodoroCount={2}
                handleIncreaseTime={handleIncreaseTime}
                handleStart={handleStart}
                handleStop={handleStop}
                minutes={minutes}
                seconds={seconds}
                isBreak={isBreak}
                isStart={isStart}
            />
        </div>
    );
}
