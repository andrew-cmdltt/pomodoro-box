import {Reducer} from "redux";
import {ADD_TASK, DECREASE_POMODORO, DELETE_TASK, INCREASE_POMODORO} from "./tasks/types";
import {tasksReducer, TaskState} from "./tasks/reduser";

export type RootState = {
    tasks: TaskState;
}

const initialState = {
    tasks: {
        data: []
    }
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
        case DELETE_TASK:
        case INCREASE_POMODORO:
        case DECREASE_POMODORO:
            return {
                ...state,
                tasks: tasksReducer(state.tasks, action)
            }
        default:
            return state
    }
}