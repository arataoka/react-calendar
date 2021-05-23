import React from 'react';
import { WEEKDAYS } from '../../utils/constant';
import styled from 'styled-components';

interface WeekdayPropType {
  weekday: typeof WEEKDAYS[number];
  key: typeof WEEKDAYS[number];
}

const CalendarWeekday: React.FC<WeekdayPropType> = ({ weekday }) => {
  console.log('calendarWeekday');
  return <WeekDay>{weekday}</WeekDay>;
};

export default React.memo(CalendarWeekday);

const WeekDay = styled.div`
  text-align: center;
  color: #333;
`;
