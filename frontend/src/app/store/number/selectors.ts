import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NumberState } from './state';

export const numberState = createFeatureSelector<NumberState>('number');

export const selectedNumber = createSelector(
  numberState,
  (state: NumberState) => state.number,
);

export const message = createSelector(
  numberState,
  (state: NumberState) => state.msg,
);

export const errorMsg = createSelector(
  numberState,
  (state: NumberState) => state.error,
);

export const loading = createSelector(
  numberState,
  (state: NumberState) => state.loading,
)