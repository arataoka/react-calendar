import React from 'react';
import styled from 'styled-components';
import { TaskType } from '../../type';

interface ModalTaskProp {
  date: string;
  tasks: TaskType[];
}

const ModalTask: React.FC<ModalTaskProp> = ({ date, tasks }) => {
  const displayedTask = tasks.filter((task) => task[date]);

  return (
    <StyledList>
      {displayedTask.map((task) => (
        <StyledItem key={task.id}>{task[date]}</StyledItem>
      ))}
    </StyledList>
  );
};

export default ModalTask;

const StyledList = styled.ul``;

const StyledItem = styled.li``;
