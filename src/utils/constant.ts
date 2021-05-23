const DISPLAY_CELLS = 42;

export const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'] as const;
export const INDEX_ARRAYS = Object.keys([...Array(DISPLAY_CELLS)]).map((num) =>
  Number(num)
);
export const JANUARY = 1;
export const DECEMBER = 12;
export const LOCAL_STORAGE_KEY = 'calendar-key';
