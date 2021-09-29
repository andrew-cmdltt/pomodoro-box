import {ITimerData} from "../store/timer/actions";

export function updateTimer(timer: ITimerData | undefined, data: ITimerData | undefined) {
    if (data && timer) {
        for (let key in data) {
            switch (key) {
                case "currentTaskNumber":
                    timer[key] = data.currentTaskNumber
                    break
                case "pomodoro":
                    timer[key] = data.pomodoro
                    break
                case "minutes":
                    timer[key] = data.minutes
                    break
                case "seconds":
                    timer[key] = data.seconds
                    break
                case "isWork":
                    timer[key] = data.isWork
                    break
                case "isBreak":
                    timer[key] = data.isBreak
                    break
                case "isPause":
                    timer[key] = data.isPause
            }
        }
    }
}


