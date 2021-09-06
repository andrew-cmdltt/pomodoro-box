import {ITasksData} from "../store/tasks/actions";

export function getTotalTime(tasks: ITasksData[]) {
    let totalTimeCount: number = 0
    for (let i = 0; i < tasks.length; i++) {
        totalTimeCount += tasks[i]["time_count"]
    }
    return totalTimeCount
}