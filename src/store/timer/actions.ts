import {ActionCreator} from "redux";
import {UPDATE_TIMER} from "./types";

export interface ITimerData {
    currentTaskNumber: number;
    pomodoro: number;
    minutes: number;
    seconds: number;
    isWork: boolean;
    isBreak: boolean;
    isPause: boolean;
}

export type UpdateTimerAction = {
    type: typeof UPDATE_TIMER;
    data?: ITimerData;
}

export const updateTimer: ActionCreator<UpdateTimerAction> = (data: ITimerData) => ({
    type: UPDATE_TIMER,
    data
})



