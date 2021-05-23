import React, { useCallback, useLayoutEffect } from 'react';
import CalendarCell from '../molecules/CalendarCell';
import styled from 'styled-components';
import CalendarWeekday from '../molecules/CalendarWeekday';
import CalendarHeader from '../molecules/CalendarHeader';
import { useSelector } from 'react-redux';
import {
  fetchHolidays,
  selectHolidays,
} from '../../stores/slices/calendarSlice';
import { WEEKDAYS } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { TaskListType } from '../../type';
import { fetchTask } from '../../stores/slices/taskSlice';
import { useDates } from '../../hooks/useDates';

const Calendar: React.FC<TaskListType> = ({ tasks }) => {
  console.log('calendar');
  // TODO [question]memo化しているのにmonthを変更すると再レンダリングされる理由がわからず(memo化していても、props以外でもstateが更新されたら再レンダリングが起きるのか)
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidays);
  const { year, month, dates } = useDates();
  const filteredTasks = useCallback(
    (date: string) => tasks.filter((task) => task[date]),
    [tasks]
  );

  useLayoutEffect(() => {
    // TODO fetchHolidayとfetchTaskで2回レンダリングされてしまっている
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
        {dates.map((date, index) => (
          <CalendarCell
            key={date}
            date={date}
            index={index}
            holiday={holidays && holidays[date]}
            month={month}
            filteredTasks={filteredTasks(date)}
          />
        ))}
      </StyledGridWrapper>
    </>
  );
};

export default React.memo(Calendar);

const StyledGridWrapper = styled.ul`
  padding: 0 10px;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(7, calc((100% - 18px) / 7));
`;
