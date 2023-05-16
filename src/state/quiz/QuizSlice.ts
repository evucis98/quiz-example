import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE: QuizReducerState = {
  answers: [],
};

export interface QuizReducerState {
  answers: string[];
}

export const QuizSlice = createSlice({
  name: 'quiz',
  initialState: INITIAL_STATE,
  reducers: {
    saveAnswer: (state, action) => ({
      ...state,
      answers: {
        ...state.answers,
        [action.payload.key]: action.payload.answers,
      },
    }),
  },
});

export const { saveAnswer } = QuizSlice.actions;

export const selectAnswers = (state: { quiz: QuizReducerState }) =>
  state.quiz.answers;
