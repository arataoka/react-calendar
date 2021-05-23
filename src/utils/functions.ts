import { INDEX_ARRAYS } from './constant';
import { TaskType } from '../type';
import {JANUARY,DECEMBER} from './constant';

export const toTwoDigit = (num:number):string => ('0' + num).slice(-2);

// 2021-01-01のようなフォーマットに変換
const translateToDate = (array: number[]) =>
  array.reduce((prev: string, next: number, index) => {
    return index === 0 ? String(next) : `${prev}-${toTwoDigit(next)}`;
  }, '');

// 1-12月になるように調整
export const adjustMonth = (month: number): number => {
  if (month === DECEMBER+1) return JANUARY;
  if (month === JANUARY-1) return DECEMBER;
  return month;
};

// ユニークなIDを生成する
export const generateId = (state: TaskType[]): string =>
  String(Math.max(...state.map((task) => Number(task.id))) + 1);

// カレンダーを生成する (日付の配列)
export const getDates = (
    year: number,
    month: number
):  string[]  => {
    const firstWeekDayIndex = new Date(year, month - 1, 1).getDay();
    const thisMonthDays = new Date(year, month, 0).getDate();
    const lastMonthDays = new Date(year, month - 1, 0).getDate();
    return INDEX_ARRAYS.map((index) => {
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
};
