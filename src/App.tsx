import React from 'react';
import Calendar from './components/organisms/Calendar';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Modal from './components/organisms/Modal';
import { useSelector } from 'react-redux';
import { selectIsOpen } from './stores/slices/modalSlice';
import { selectTask } from './stores/slices/taskSlice';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App: React.FC = () => {
  const isOpen = useSelector(selectIsOpen);
  const tasks = useSelector(selectTask);
  console.log(tasks);

  return (
    <StyledApp>
      <GlobalStyle />
      <Calendar tasks={tasks} />
      {isOpen && <Modal tasks={tasks} />}
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  position: relative;
`;
