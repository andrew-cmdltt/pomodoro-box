import {Reducer} from "react";
import {ITasksData, AddTaskAction} from "./actions";

export type TaskState = {
    data?: ITasksData;
}

type AddAction = AddTaskAction

export const addTaskReducer: Reducer<TaskState, AddAction> = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
