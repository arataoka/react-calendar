import { TaskListType, TaskType } from '../../type';
import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '../../utils/functions';
import { LOCAL_STORAGE_KEY } from '../../utils/constant';

const initialState: TaskListType = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<{ text: string; date: string }>) {
      const id = state.tasks.length ? generateId(state.tasks) : '1';
      const newTask = { id, [action.payload.date]: action.payload.text };
      state.tasks = [...state.tasks, newTask];
    },
    deleteTask(state, action: PayloadAction<{ id: string }>) {
      state.tasks = [
        ...state.tasks.filter(({ id }) => id !== action.payload.id),
      ];
    },
    saveTask(state) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    fetchTask(state) {
      console.log('fetchTask');
      const val = localStorage.getItem(LOCAL_STORAGE_KEY);
      state.tasks = val ? JSON.parse(val) : [];
    },
  },
});

export const { addTask, saveTask, fetchTask, deleteTask } = taskSlice.actions;
export const selectTask = (state: RootState): TaskType[] => state.task.tasks;

export default taskSlice.reducer;
