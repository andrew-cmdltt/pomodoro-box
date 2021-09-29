import {Reducer} from "redux";
import {ADD_TASK, DECREASE_POMODORO, DELETE_TASK, EDIT_TASK, INCREASE_POMODORO, SET_EDIT_TASK} from "./tasks/types";
import {tasksReducer, TaskState} from "./tasks/reduser";
import {statisticsReducer, StatisticsState} from "./statistics/reduser";
import {SET_STATISTICS} from "./statistics/types";
import {timerReducer, TimerState} from "./timer/reduser";
import {UPDATE_TIMER} from "./timer/types";

export type RootState = {
    tasks: TaskState;
    statistics: StatisticsState
    timer: TimerState
}

const initialState = {
    tasks: {
        data: []
    },
    statistics: {
        data: []
    },
    timer: {
        data: {
            currentTaskNumber: 1,
            pomodoro: 1,
            minutes: 25,
            seconds: 60,
            isWork: false,
            isBreak: false,
            isPause: false
        }
    }
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
        case DELETE_TASK:
        case INCREASE_POMODORO:
        case DECREASE_POMODORO:
        case EDIT_TASK:
        case SET_EDIT_TASK:
            return {
                ...state,
                tasks: tasksReducer(state.tasks, action)
            }
        case SET_STATISTICS:
            return {
                ...state,
                statistics: statisticsReducer(state.statistics, action)
            }
        case UPDATE_TIMER:
            return {
                ...state,
                timer: timerReducer(state.timer, action)
            }
        default:
            return state
    }
}