import React from 'react';
import { WEEKDAYS } from '../../utils/constant';

interface WeekdayType {
  weekday: typeof WEEKDAYS[number];
  key: typeof WEEKDAYS[number];
}

const CalendarWeekday: React.FC<WeekdayType> = ({ weekday }) => {
  console.log('calendarWeekday');
  return <div>{weekday}</div>;
};

export default React.memo(CalendarWeekday);
