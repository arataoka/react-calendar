import { CalendarType, HolidayType } from '../../type';
import { RootState } from '../index';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://holidays-jp.github.io/api/v1/date.json';
// initialize
console.log('initialize');
const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth() + 1;
const initialState: CalendarType = {
  displayYear: thisYear,
  displayMonth: thisMonth,
  holidays: null,
};

export const fetchHolidays = createAsyncThunk(
  'calendar/getHolidays',
  async () => {
    const res = await axios.get<HolidayType>(apiUrl);
    return res.data;
  }
);
export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendar(state, action) {
      state.displayYear = action.payload.year;
      state.displayMonth = action.payload.month;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchHolidays.fulfilled,
      (state, action: PayloadAction<HolidayType>) => {
        console.log('fetchHolidays');
        return {
          ...state,
          holidays: action.payload,
        };
      }
    );
  },
});

export const { setCalendar } = calendarSlice.actions;

export const selectYear = (state: RootState): number =>
  state.calendar.displayYear;
export const selectMonth = (state: RootState): number =>
  state.calendar.displayMonth;
export const selectHolidays = (state: RootState): HolidayType | null =>
  state.calendar.holidays;

export default calendarSlice.reducer;
