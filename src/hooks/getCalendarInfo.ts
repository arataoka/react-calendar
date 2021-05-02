import { generateDates } from '../utils/functions';

export const getCalendarInfo = (
  year: number,
  month: number
): { dates: string[] } => {
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
  return { dates };
};
