import {Reducer} from "react";
import {ITasksData, AddTaskAction, DeleteTaskAction} from "./actions";

export type TaskState = {
    data: ITasksData[];
}

type TaskActions = AddTaskAction | DeleteTaskAction

export const tasksReducer: Reducer<TaskState, TaskActions> = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                data: action.data ? [...state.data, action.data] : []
            };
       case "DELETE_TASK":
           console.log(action.data)
            return {
                ...state,
                data: state.data.filter(task => task.id !== action.data)
            };
        default:
            return state;
    }
}
