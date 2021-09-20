import {useCallback, useEffect, useState} from "react";
import {deleteTask, ITasksData} from "../store/tasks/actions";
import {useDispatch} from "react-redux";
import {setStatistics} from "../store/statistics/actions";
const uuid = require("uuid");

export type UseTimerParams = {
    currentTaskNumber: number,
    currentTask: ITasksData,
    pomodoro: number,
    minutes: number,
    seconds: number,
    handleStart: () => void,
    handleStop: () => void,
    handlePause: () => void,
    handleIncreaseTime: () => void,
    handleScip: () => void,
    isBreak: boolean,
    isWork: boolean,
    isPause: boolean
}

export function useTimer(tasks: ITasksData[]) {
    const dispatch = useDispatch()

    const currentTask = tasks[0]

    const [pomodoro, setPomodoro] = useState(1)
    const [currentTaskNumber, setCurrentTaskNumber] = useState(1)

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(60)

    const [isWork, setIsWork] = useState(false)
    const [isBreak, setIsBreak] = useState(false)
    const [isPause, setIsPause] = useState(false)

    const [timeOnPause, setTimeOnPause] = useState(0)
    const [stopping, setStopping] = useState(0)

    const setCompleteState = useCallback(() => {
        setIsWork(false)
        setIsPause(false)
        setIsBreak(false)

        if (pomodoro < currentTask.pomodoro_count) {
            setPomodoro(pomodoro => pomodoro + 1)
        } else {
            setCurrentTaskNumber(currentTaskNumber => currentTaskNumber + 1)
            dispatch(deleteTask(currentTask.id))
            dispatch(setStatistics({
                id: uuid.v4(),
                date: new Date(),
                time_on_pause: timeOnPause,
                stopping: stopping,
                pomodoro_count: pomodoro
            }))
        }
        setMinutes(25);
        setSeconds(60);
    }, [currentTask?.id, currentTask?.pomodoro_count, dispatch, pomodoro, stopping, timeOnPause])

    const handleStart = () => {
        setIsWork(true)
        setMinutes(minutes => minutes - 1);
    }

    const handleStop = () => {
        setIsWork(false)
        setMinutes(25);
        setSeconds(60);
        setStopping(stopping => stopping + 1)
    }

    const handlePause = () => {
        setIsPause(!isPause)
        setStopping(stopping => stopping + 1)
    }

    const handleIncreaseTime = () => {
        setMinutes(minutes => minutes + 1);
    }

    const handleScip = () => {
        setCompleteState()
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
                            setCompleteState()
                        } else {
                            setIsBreak(true)
                            setMinutes(4)
                        }
                    }
                }
            } else if (isWork && isPause) {
                setTimeOnPause(timeOnPause => timeOnPause + 1)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isBreak, isPause,
        isWork, minutes,
        seconds, currentTaskNumber,
        setCompleteState, timeOnPause]);

    const params: UseTimerParams = {
        currentTaskNumber: currentTaskNumber,
        currentTask: currentTask,
        pomodoro: pomodoro,
        minutes: minutes,
        seconds: seconds,
        handleStart: handleStart,
        handleStop: handleStop,
        handlePause: handlePause,
        handleIncreaseTime: handleIncreaseTime,
        handleScip: handleScip,
        isBreak: isBreak,
        isWork: isWork,
        isPause: isPause
    }

    return [params]
}