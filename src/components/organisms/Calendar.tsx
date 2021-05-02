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
import { useDispatch } from 'react-redux';
import { TaskListType } from '../../type';
import { getCalendarInfo } from '../../hooks/getCalendarInfo';
import { fetchTask } from '../../stores/slices/taskSlice';

const Calendar: React.FC<TaskListType> = ({ tasks }) => {
  console.log('calendar');
  const dispatch = useDispatch();
  const year = useSelector(selectYear);
  const month = useSelector(selectMonth);
  const holidays = useSelector(selectHolidays);
  const { dates } = getCalendarInfo(year, month);
  const filteredTasks = (date: string) => tasks.filter((task) => task[date]);

  useLayoutEffect(() => {
    console.log('fetch');
    dispatch(fetchHolidays());
    dispatch(fetchTask());
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
        {dates.map((date) => (
          <CalendarCell
            key={date}
            date={date}
            holiday={holidays && holidays[date]}
            filteredTasks={filteredTasks(date)}
          />
        ))}
      </StyledGridWrapper>
    </>
  );
};

export default React.memo(Calendar);

const StyledGridWrapper = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, calc((100% - 60px) / 7));
`;
