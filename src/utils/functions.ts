import { INDEX_ARRAYS } from './constant';
import { TaskType } from '../type';

const translateToDate = (array: number[]) =>
  array.reduce((prev: string, next: number, index) => {
    return index === 0 ? String(next) : `${prev}-${('0' + next).slice(-2)}`;
  }, '');

export const adjustMonth = (month: number): number => {
  if (month === 13) return 1;
  if (month === 0) return 12;
  return month;
};

interface generateDatesType {
  year: number;
  month: number;
  firstWeekDayIndex: number;
  thisMonthDays: number;
  lastMonthDays: number;
}

export const generateDates = ({
  year,
  month,
  firstWeekDayIndex,
  thisMonthDays,
  lastMonthDays,
}: generateDatesType): string[] =>
  INDEX_ARRAYS.map((index) => {
    const relativeDate = index - firstWeekDayIndex + 1; //月の初日を1とし、先月は0とマイナスで示す。
    // 先月の場合
    if (index < firstWeekDayIndex)
      return translateToDate([
        year,
        adjustMonth(month - 1),
        lastMonthDays + relativeDate,
      ]);
    // 来月:今月の場合
    return translateToDate([
      year,
      ...(relativeDate > thisMonthDays
        ? [adjustMonth(month + 1), relativeDate - thisMonthDays]
        : [month, relativeDate]),
    ]);
  });

export const generateId = (state: TaskType[]): string =>
  String(Math.max(...state.map((task) => Number(task.id))) + 1);
