import {Reducer} from "react";
import {
    ITasksData,
    AddTaskAction,
    DeleteTaskAction,
    IncreasePomodoroAction,
    DecreasePomodoroAction,
    EditTaskAction
} from "./actions";
import {updateTasks} from "../../utils/updateState";

export type TaskState = {
    data: ITasksData[];
}

type TaskActions = AddTaskAction
    | DeleteTaskAction |
    IncreasePomodoroAction |
    DecreasePomodoroAction | EditTaskAction

export const tasksReducer: Reducer<TaskState, TaskActions> = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                data: action.data ? [...state.data, action.data] : []
            };
        case "DELETE_TASK":
            return {
                ...state,
                data: state.data.filter(task => task.id !== action.data)
            };
        case "INCREASE_POMODORO":
            updateTasks(state.data, action.data, "INCREASE_POMODORO")
            return {
                ...state,
            };
        case "DECREASE_POMODORO":
            updateTasks(state.data, action.data, "DECREASE_POMODORO")
            return {
                ...state,
            };
        case "EDIT_TASK":
            console.log(action.data)

            updateTasks(state.data, action.data, "EDIT_TASK")
            return {
                ...state,
            };
        default:
            return state;
    }
}
