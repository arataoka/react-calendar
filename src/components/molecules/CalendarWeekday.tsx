import React from 'react';
import { WEEKDAYS } from '../../utils/constant';

interface WeekdayPropType {
  weekday: typeof WEEKDAYS[number];
  key: typeof WEEKDAYS[number];
}

const CalendarWeekday: React.FC<WeekdayPropType> = ({ weekday }) => {
  console.log('calendarWeekday');
  return <div>{weekday}</div>;
};

export default React.memo(CalendarWeekday);
