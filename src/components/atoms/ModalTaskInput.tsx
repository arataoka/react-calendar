import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../stores/slices/taskSlice';

interface ModalTaskInputProp {
  date: string;
}

const ModalTaskInput: React.FC<ModalTaskInputProp> = ({ date }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.keyCode === 13)) return;
    dispatch(addTask({ text, date }));
    setText('');
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onKeyDown={handleKeyDown}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </>
  );
};

export default ModalTaskInput;
