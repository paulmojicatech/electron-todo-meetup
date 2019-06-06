import { IToDoItem } from '../models/toDoItem';
import { AppActions, AppActionTypes } from './app.actions';

export interface State {
    ToDos: IToDoItem[];
}

const initialState: State = {
    ToDos: []
}

export function reducer(state:State = initialState, action:AppActions):State {
    switch (action.type) {
        case AppActionTypes.AddItem:
            const updatedToDos = [...state.ToDos, action.payload];
            return {
                ...state,
                ToDos: updatedToDos
            };
        case AppActionTypes.LoadFile:
            return {
                ...state,
                ToDos: action.payload
            };
        default:
            return state;
    }
}