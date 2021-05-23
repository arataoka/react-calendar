import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TaskType } from '../../type';
import { openModal, setDate } from '../../stores/slices/modalSlice';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../stores/slices/taskSlice';
import { toTwoDigit } from '../../utils/functions';

interface CalendarCellPropType {
  index: number;
  key: string;
  date: string;
  holiday: string | null;
  filteredTasks: TaskType[];
  month: number;
}

const CalendarCell: React.FC<CalendarCellPropType> = ({
  index,
  date,
  holiday,
  filteredTasks,
  month,
}) => {
  console.log('calendarCell');
  //TODO [question] レンダリングされている数が多い
  //TODO [question] 変更のあったセルのみ再レンダリングさせることはできないか
  const dispatch = useDispatch();
  const [cellClass, setCellClass] = useState('');
  const handleOpenModal = () => {
    dispatch(openModal());
    dispatch(setDate({ date }));
  };
  const handleDeleteTask = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    dispatch(deleteTask({ id }));
  };

  useEffect(() => {
    const cellMonth = date.match(/(?<=-).*?(?=-)/);
    setCellClass('');
    if (index % 7 === 0) setCellClass('isSunday');
    if (index % 7 === 6) setCellClass('isSaturday');
    if (holiday) setCellClass('isHoliday');
    if (cellMonth && toTwoDigit(month) !== cellMonth[0])
      setCellClass('isOutMonth');
  }, [month]);

  return (
    <StyledCell onClick={handleOpenModal} className={cellClass}>
      {date}
      {holiday && <StyledHoliday>{holiday}</StyledHoliday>}
      <ul>
        {filteredTasks.map((task) => (
          <StyledTask key={task.id}>
            {task[date]}
            <StyledClose onClick={(event) => handleDeleteTask(event, task.id)}>
              ×
            </StyledClose>
          </StyledTask>
        ))}
      </ul>
    </StyledCell>
  );
};

export default React.memo(CalendarCell);

const StyledCell = styled.li`
  background-color: ghostwhite;
  min-height: 150px;
  &.isHoliday {
    background-color: rgba(11, 156, 49, 0.2);
  }
  &.isSunday {
    background-color: rgba(255, 192, 203, 0.4);
  }
  &.isSaturday {
    background-color: rgba(79, 139, 245, 0.2);
  }
  &.isOutMonth {
    background-color: #e5e5e5;
  }
`;

const StyledHoliday = styled.p`
  color: palevioletred;
`;

const StyledTask = styled.li`
  background-color: royalblue;
  color: white;
  position: relative;
`;

const StyledClose = styled.span`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
