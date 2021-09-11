import {useEffect, useState} from "react";

export function useTimer() {
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

    return {isStated, minutes, seconds}
}