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
            console.log('Add Item');
            return {
                ...state,
                ToDos: [...state.ToDos, action.payload]
            };
        default:
            return state;
    }
}