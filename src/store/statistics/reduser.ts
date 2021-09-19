import {Reducer} from "react";
import {IStatisticsData, SetStatisticAction} from "./actions";

export type StatisticsState = {
    data: IStatisticsData[];
}

type StatisticActions = SetStatisticAction
export const statisticsReducer: Reducer<StatisticsState, StatisticActions> = (state, action) => {
    switch (action.type) {
        case "SET_STATISTICS":
            return {
                ...state,
                data: action.data ? [...state.data, action.data] : []
            };
        default:
            return state;
    }
}
