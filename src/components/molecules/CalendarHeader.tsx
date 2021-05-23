import React from 'react';
import styled from 'styled-components';
import { useMonth } from '../../hooks/useMonth';

interface CalendarHeaderType {
  year: number;
  month: number;
}

const CalendarHeader: React.FC<CalendarHeaderType> = ({ year, month }) => {
  console.log('calendarHeader');
  const { incrementMonth, decrementMonth } = useMonth(year, month);
  return (
    <StyledCalendarHeader>
      <div>
        {year}年 {month}月
      </div>
      <div>
        <button onClick={decrementMonth}>前の月へ</button>
        <button onClick={incrementMonth}>次の月へ</button>
      </div>
    </StyledCalendarHeader>
  );
};

export default React.memo(CalendarHeader);

const StyledCalendarHeader = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;

  button {
    color: white;
    border: white 1px solid;
    background-color: transparent;
    &:first-child {
      margin-right: 20px;
    }
  }
`;
