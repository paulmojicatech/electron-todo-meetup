import { Action } from '@ngrx/store';
import { IToDoItem } from '../models/toDoItem';

export enum AppActionTypes {
    LoadFile = '[APP] Load File',
    LoadFileSuccess = '[APP] Load File Success',
    LoadFileFail = '[APP] Load File Fail',
    AddItem = '[APP] Add Item'
}

export class LoadFile implements Action {
    constructor(public payload: string) { }
    readonly type = AppActionTypes.LoadFile;
}

export class LoadFileSuccess implements Action {
    constructor(public payload: string) { }
    readonly type = AppActionTypes.LoadFileSuccess;
}

export class LoadFileFail implements Action {
    constructor(public payload: string) { }
    readonly type = AppActionTypes.LoadFileFail;
}

export class AddItem implements Action {
    constructor(public payload: IToDoItem) { }
    readonly type = AppActionTypes.AddItem;
}

export type AppActions = LoadFile |
    LoadFileSuccess |
    LoadFileFail |
    AddItem;
