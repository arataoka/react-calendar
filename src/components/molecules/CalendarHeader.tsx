import React from 'react';
import styled from 'styled-components';
import { setCalendar } from '../../stores/slices/calendarSlice';
import { useDispatch } from 'react-redux';
import { adjustMonth } from '../../utils/functions';
import { JANUARY, DECEMBER } from '../../utils/constant';

interface CalendarHeaderType {
  year: number;
  month: number;
}

const CalendarHeader: React.FC<CalendarHeaderType> = ({ year, month }) => {
  const dispatch = useDispatch();
  const incrementMonth = () => {
    // 12月から1月になる場合を考慮
    const payload =
      adjustMonth(month + 1) === JANUARY
        ? { year: year + 1, month: JANUARY }
        : { year, month: month + 1 };
    dispatch(setCalendar(payload));
  };
  const decrementMonth = () => {
    // 1月から12月になる場合を考慮
    const payload =
      adjustMonth(month - 1) === DECEMBER
        ? { year: year - 1, month: DECEMBER }
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
