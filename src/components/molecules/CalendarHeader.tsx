import React from 'react';
import styled from 'styled-components';
import { setCalendar } from '../../stores/slices/calendarSlice';
import { useDispatch } from 'react-redux';
import { adjustMonth } from '../../utils/functions';

const CalendarHeader: React.FC<{ year: number; month: number }> = ({
  year,
  month,
}) => {
  const dispatch = useDispatch();

  const incrementMonth = () => {
    // 12月から1月になる場合を考慮
    const payload =
      adjustMonth(month + 1) === 1
        ? { year: year + 1, month: 1 }
        : { year, month: month + 1 };
    dispatch(setCalendar(payload));
  };
  const decrementMonth = () => {
    // 1月から12月になる場合を考慮
    const payload =
      adjustMonth(month - 1) === 12
        ? { year: year - 1, month: 12 }
        : { year, month: month - 1 };
    dispatch(setCalendar(payload));
  };

  return (
    <StyledCalendarHeader>
      {year}年 {month}月<button onClick={incrementMonth}>+</button>
      <button onClick={decrementMonth}>-</button>
    </StyledCalendarHeader>
  );
};

export default CalendarHeader;

const StyledCalendarHeader = styled.nav`
  background-color: black;
  color: white;
`;
