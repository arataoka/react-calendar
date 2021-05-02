import React from 'react';
import styled from 'styled-components';
import { TaskType } from '../../type';

interface ModalTaskPropType {
  date: string;
  tasks: TaskType[];
}

const ModalTask: React.FC<ModalTaskPropType> = ({ date, tasks }) => {
  console.log('modaltask');
  const displayedTask = tasks.filter((task) => task[date]);

  return (
    <StyledList>
      {displayedTask.map((task) => (
        <StyledItem key={task.id}>{task[date]}</StyledItem>
      ))}
    </StyledList>
  );
};

export default React.memo(ModalTask);

const StyledList = styled.ul`
  padding: 10px;
`;

const StyledItem = styled.li`
  background-color: royalblue;
  color: white;
  padding: 2px;
  border-radius: 3px;
`;
