import React from 'react';
import styled from 'styled-components';
import { TaskType } from '../../type';
import { openModal, setDate } from '../../stores/slices/modalSlice';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../stores/slices/taskSlice';

interface CalendarCellPropType {
  key: string;
  date: string;
  holiday: string | null;
  filteredTasks: TaskType[];
}

const CalendarCell: React.FC<CalendarCellPropType> = ({
  date,
  holiday,
  filteredTasks,
}) => {
  console.log('calendarCell');
  //TODO [question] 変更のあったセルのみ再レンダリングさせることはできないか
  const dispatch = useDispatch();
  const handleClickModal = () => {
    dispatch(openModal());
    dispatch(setDate({ date }));
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    dispatch(deleteTask({ id }));
  };

  return (
    <StyledCell onClick={handleClickModal}>
      {date}
      {holiday && <StyledHoliday>{holiday}</StyledHoliday>}
      <ul>
        {filteredTasks.map((task) => (
          <StyledTask key={task.id}>
            {task[date]}
            <StyledClose onClick={(event) => handleDelete(event, task.id)}>
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
  background-color: beige;
  min-height: 150px;
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
