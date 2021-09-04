import {Reducer, ActionCreator, AnyAction} from "redux";

export type RootState = {
    taskText: string;
}

const initialState = {
    taskText: 'Сверстать сайт',
}

const UPDATE_TASK = 'UPDATE_TASK'

export const updateTask: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_TASK,
    text
})

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TASK:
            return {
                ...state,
                taskText: action.text
            };
        default:
            return state
    }
}