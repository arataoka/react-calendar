import React, { useLayoutEffect } from 'react';
import CalendarCell from '../molecules/CalendarCell';
import styled from 'styled-components';
import CalendarWeekday from '../molecules/CalendarWeekday';
import CalendarHeader from '../molecules/CalendarHeader';
import { useSelector } from 'react-redux';
import {
  fetchHolidays,
  selectHolidays,
  selectMonth,
  selectYear,
} from '../../stores/slices/calendarSlice';
import { WEEKDAYS } from '../../utils/constant';
import { generateDates } from '../../utils/functions';
import { useDispatch } from 'react-redux';
import { TaskListType } from '../../type';

const Calendar: React.FC<TaskListType> = ({ tasks }) => {
  const dispatch = useDispatch();
  const year = useSelector(selectYear);
  const month = useSelector(selectMonth);
  const holidays = useSelector(selectHolidays);
  const firstWeekDayIndex = new Date(year, month - 1, 1).getDay();
  const thisMonthDays = new Date(year, month, 0).getDate();
  const lastMonthDays = new Date(year, month - 1, 0).getDate();
  const dates = generateDates({
    year,
    month,
    firstWeekDayIndex,
    thisMonthDays,
    lastMonthDays,
  });

  useLayoutEffect(() => {
    dispatch(fetchHolidays());
  }, []);

  return (
    <>
      <CalendarHeader year={year} month={month} />
      <StyledGridWrapper>
        {WEEKDAYS.map((weekday) => (
          <CalendarWeekday key={weekday} weekday={weekday} />
        ))}
      </StyledGridWrapper>
      <StyledGridWrapper>
        {dates.map((date, index) => (
          <CalendarCell
            key={index}
            date={date}
            holidays={holidays}
            tasks={tasks}
          />
        ))}
      </StyledGridWrapper>
    </>
  );
};

export default Calendar;

const StyledGridWrapper = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, calc((100% - 60px) / 7));
`;
