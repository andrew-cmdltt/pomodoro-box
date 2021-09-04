import {Reducer} from "react";
import {ITasksData, AddTaskAction, DeleteTaskAction, GetTasksAction} from "./actions";

export type TaskState = {
    data: ITasksData[];
}

type TaskActions = AddTaskAction | DeleteTaskAction | GetTasksAction

export const tasksReducer: Reducer<TaskState, TaskActions> = (state, action) => {
    switch (action.type) {
        case "GET_TASKS":
            return {
                ...state,
                data: action.data ? [...state.data, action.data] : []
            }
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
        default:
            return state;
    }
}
