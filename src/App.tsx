import React, { useEffect } from 'react';
import Calendar from './components/organisms/Calendar';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Modal from './components/organisms/Modal';
import { useSelector } from 'react-redux';
import { selectIsOpen } from './stores/slices/modalSlice';
import { saveTask, selectTask } from './stores/slices/taskSlice';
import { useDispatch } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const tasks = useSelector(selectTask);
  useEffect(() => {
    dispatch(saveTask());
  }, [tasks]);

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
