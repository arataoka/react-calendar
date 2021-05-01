export interface CalendarType {
  displayYear: number;
  displayMonth: number;
  holidays: HolidayType | null;
}

export interface HolidayType {
  [key: string]: string;
}

export interface TaskListType {
  tasks: TaskType[];
}

export interface TaskType {
  [key: string]: string;
  id: string;
}

export interface TaskSliceType {
  tasks: TaskType[];
}

export interface ModalType {
  isOpen: boolean;
  date: string;
}
