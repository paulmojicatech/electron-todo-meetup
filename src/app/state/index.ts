import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as appState from './app.reducer';

const getAppState = createFeatureSelector<appState.State>('app');

export const getToDoItems = createSelector(
    getAppState,
    state => state.ToDos
);