import {ActionCreator} from "redux";

export interface ITasksData {
    id?: string;
    title?: string;
    pomodoro_count?: string;
}

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export type AddTaskAction = {
    type: typeof ADD_TASK;
    data?: ITasksData;
}

export const addTask: ActionCreator<AddTaskAction> = (data: ITasksData) => ({
    type: ADD_TASK,
    data
})

export type DeleteTaskAction = {
    type: typeof DELETE_TASK;
    data?: ITasksData;
}

export const deleteTask: ActionCreator<DeleteTaskAction> = (data: ITasksData) => ({
    type: DELETE_TASK,
    data
});
