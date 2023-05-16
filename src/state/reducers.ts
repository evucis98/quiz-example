import { AnyAction, CombinedState, combineReducers } from 'redux';

import { AppReducerState, AppSlice } from './app/AppSlice';
import { QuizReducerState, QuizSlice } from './quiz/QuizSlice';

export interface RootState {
  app: AppReducerState;
  quiz: QuizReducerState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  app: AppSlice.reducer,
  quiz: QuizSlice.reducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);

export { rootReducer };
