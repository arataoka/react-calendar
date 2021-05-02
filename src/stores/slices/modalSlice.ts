import { ModalType } from '../../type';
import { RootState } from '../index';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ModalType = {
  isOpen: false,
  date: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    setDate(state, action) {
      state.date = action.payload.date;
    },
  },
});

export const { openModal, closeModal, setDate } = modalSlice.actions;
export const selectIsOpen = (state: RootState): boolean => state.modal.isOpen;
export const selectDate = (state: RootState): string => state.modal.date;

export default modalSlice.reducer;
