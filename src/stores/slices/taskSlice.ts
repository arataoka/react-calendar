import { TaskSliceType, TaskType } from '../../type';
import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '../../utils/functions';

const initialState: TaskSliceType = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<{ text: string; date: string }>) {
      const id = state.tasks.length ? generateId(state.tasks) : '1';
      const newTask = { id, [action.payload.date]: action.payload.text };
      return { ...state, tasks: [...state.tasks, newTask] };
    },
  },
});

export const { addTask } = taskSlice.actions;
export const selectTask = (state: RootState): TaskType[] => state.task.tasks;

export default taskSlice.reducer;
