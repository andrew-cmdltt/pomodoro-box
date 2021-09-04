import {Reducer} from "redux";
import {ADD_TASK} from "./tasks/actions";
import {addTaskReducer, TaskState} from "./tasks/reduser";

export type RootState = {
    task: TaskState;
}

const initialState = {
    task: {
        data: {},
    },
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: addTaskReducer(state.task, action)
            }
        default:
            return state
    }
}