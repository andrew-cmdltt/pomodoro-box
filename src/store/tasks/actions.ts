import {ActionCreator} from "redux";

export interface ITasksData {
    title?: string;
    pomodoro_count?: string;
}

export const ADD_TASK = 'ADD_TASK';

export type AddTaskAction = {
    type: typeof ADD_TASK;
    data?: ITasksData;
}

export const addTask: ActionCreator<AddTaskAction> = (data: ITasksData) => ({
    type: ADD_TASK,
    data
});
