import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromApp from './app.reducer';

const getAppFeatureState = createFeatureSelector<fromApp.State>('app');

export const getToDoItems = createSelector(
    getAppFeatureState,
    state => state.ToDos
);