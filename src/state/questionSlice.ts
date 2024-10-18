import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  id: string;
  text: string;
  createdAt: string;
}

interface QuestionState {
  questions: Question[];
  createQuestionStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuestionState = {
  questions: [],
  createQuestionStatus: 'idle',
  error: null,
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
    },
    startCreateQuestion: (state) => {
      state.createQuestionStatus = 'loading';
      state.error = null;
    },
    createQuestionSuccess: (state) => {
      state.createQuestionStatus = 'succeeded';
    },
    createQuestionFailure: (state, action: PayloadAction<string>) => {
      state.createQuestionStatus = 'failed';
      state.error = action.payload;
    },
    resetCreateQuestionStatus: (state) => {
      state.createQuestionStatus = 'idle';
      state.error = null;
    },
  },
});

export const {
  addQuestion,
  startCreateQuestion,
  createQuestionSuccess,
  createQuestionFailure,
  resetCreateQuestionStatus,
} = questionSlice.actions;

export default questionSlice.reducer;
