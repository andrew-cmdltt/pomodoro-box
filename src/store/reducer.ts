import {Reducer} from "redux";
import {ADD_TASK, DELETE_TASK} from "./tasks/actions";
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
            return {
                ...state,
                tasks: tasksReducer(state.tasks, action)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: tasksReducer(state.tasks, action)
            }
        default:
            return state
    }
}