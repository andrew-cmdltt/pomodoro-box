import {ITasksData} from "../store/tasks/actions";

type ActionTypes = "INCREASE_POMODORO" | "DECREASE_POMODORO"

export function updateTasks(tasks: ITasksData[], id: ITasksData | undefined, actionType: ActionTypes) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]["id"] === id) {
            switch (actionType) {
                case "INCREASE_POMODORO":
                    tasks[i]["pomodoro_count"] += 1
                    tasks[i]["time_count"] += 25
                    break
                case "DECREASE_POMODORO":
                    if (tasks[i]["pomodoro_count"] > 1) {
                        tasks[i]["pomodoro_count"] -= 1
                        tasks[i]["time_count"] -= 25
                    }
                    break
            }
        }
    }
}