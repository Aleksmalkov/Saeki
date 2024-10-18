import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import orderReducer from './orderSlice';
import questionReducer from './questionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer,
    question: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
