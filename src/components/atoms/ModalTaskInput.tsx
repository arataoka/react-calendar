import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../stores/slices/taskSlice';

interface TaskInputPropType {
  date: string;
}

const ModalTaskInput: React.FC<TaskInputPropType> = ({ date }) => {
  console.log('modaltaskinput');
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.keyCode === 13) || text === '') return;
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

export default React.memo(ModalTaskInput);
