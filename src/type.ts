export interface HolidayType {
  [key: string]: string;
}

export interface CalendarType {
  displayYear: number;
  displayMonth: number;
  holidays: HolidayType | null;
}

export interface TaskType {
  [key: string]: string;
  id: string;
}

export interface TaskListType {
  tasks: TaskType[];
}

export interface ModalType {
  isOpen: boolean;
  date: string;
}

export interface generateDatesType {
  year: number;
  month: number;
  firstWeekDayIndex: number;
  thisMonthDays: number;
  lastMonthDays: number;
}