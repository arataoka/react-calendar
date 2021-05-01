import React from 'react';
import styled from 'styled-components';
import { HolidayType, TaskType } from '../../type';
import { openModal, setDate } from '../../stores/slices/modalSlice';
import { useDispatch } from 'react-redux';

interface DayProps {
  key: number;
  date: string;
  holidays: HolidayType | null;
  tasks: TaskType[];
}

const CalendarCell: React.FC<DayProps> = ({ date, holidays, tasks }) => {
  const dispatch = useDispatch();
  console.log('calendarCell');
  const handleClickModal = () => {
    dispatch(openModal());
    dispatch(setDate({ date }));
  };

  return (
    <StyledCell onClick={handleClickModal}>
      {date}
      <p>{holidays && holidays[date]}</p>
      {tasks.map((task) => (
        <p key={task.id}>{task[date]}</p>
      ))}
    </StyledCell>
  );
};

export default CalendarCell;

const StyledCell = styled.li`
  background-color: beige;
  min-height: 150px;
`;
