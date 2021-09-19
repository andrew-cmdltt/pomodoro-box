import {ActionCreator} from "redux";
import {SET_STATISTICS} from "./types";

export interface IStatisticsData {
    id: string,
    date: string,
    focus: number,
    time_on_pause: number,
    stopping: number
}

export type SetStatisticAction = {
    type: typeof SET_STATISTICS;
    data?: IStatisticsData;
}

export const setStatistic: ActionCreator<SetStatisticAction> = (data: IStatisticsData) => ({
    type: SET_STATISTICS,
    data
})