import {getStatisticsByDayOfWeek} from "./getStatisticsByDayOfWeek";
import {StatisticsByWeek} from "./getStatisticsByWeek";

export function getHeight(day: string, statisticsByWeek: StatisticsByWeek[]) {
    let height: number

    const seconds = getStatisticsByDayOfWeek(day, statisticsByWeek).task_execution_time

    if (seconds === 0 || seconds <= 60) {
        height = 5
    } else {
        height = seconds * 0.056
        if (height > 430) {
            height = 430
        }
    }

    return Math.round(height)
}