import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './slices/questionsSlice';
import categoriesReducer from './slices/categoriesSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    categories: categoriesReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
