import React from 'react';
import styled from 'styled-components';
import ModalTask from '../molecules/ModalTask';
import ModalTaskInput from '../atoms/ModalTaskInput';
import { closeModal, selectDate } from '../../stores/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TaskListType } from '../../type';

const Modal: React.FC<TaskListType> = ({ tasks }) => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  return (
    <>
      <StyledOverlay onClick={() => dispatch(closeModal())}></StyledOverlay>
      <StyledModal>
        <p>{date}</p>
        <ModalTask date={date} tasks={tasks} />
        <ModalTaskInput date={date} />
      </StyledModal>
    </>
  );
};

export default Modal;

const StyledOverlay = styled.div`
  background-color: black;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledModal = styled.div`
  position: fixed;
  background-color: white;
  height: 300px;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
