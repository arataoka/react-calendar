import React, { useEffect } from 'react';
import Calendar from './components/organisms/Calendar';
import styled from 'styled-components';
import Modal from './components/organisms/Modal';
import { useSelector } from 'react-redux';
import { selectIsOpen } from './stores/slices/modalSlice';
import { saveTask, selectTask } from './stores/slices/taskSlice';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './assets/style';

const App: React.FC = () => {
  console.log('App');
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
