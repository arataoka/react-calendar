import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import calendarReducer from './slices/calendarSlice';
import taskReducer from './slices/taskSlice';
import modalReducer from './slices/modalSlice';

export const index = configureStore({
  reducer: {
    calendar: calendarReducer,
    task: taskReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
