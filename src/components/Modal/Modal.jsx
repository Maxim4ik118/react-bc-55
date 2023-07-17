import React, { useEffect, useRef, useState } from 'react';
import { StyledModal, StyledOverlay } from './styled';

export default function Modal({ modalData, onCloseModal }) {
  const [dataType, setDataType] = useState('users'); // "users" | "posts" | "comments"
  const [counter, setCounter] = useState(0);
  const btnCountRef = useRef(null); // { current: null }

  const handleClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const handleLeaveTabChange = type => {
    setDataType(type);
  };

  const handleCount = () => {
    btnCountRef.current = btnCountRef.current ? btnCountRef.current + 1 : 1;
    
    console.log(btnCountRef.current);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);
  console.log("render");
  return (
    <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
        <button onClick={onCloseModal} className="close-btn">
          &times;
        </button>
        <h2>Modal window</h2>

        <pre>{JSON.stringify(modalData, null, 2)}</pre>

        <div>
          <button onClick={() => handleLeaveTabChange('users')}>Users</button>
          <button onClick={() => handleLeaveTabChange('posts')}>Posts</button>
          <button onClick={() => handleLeaveTabChange('comments')}>
            Comments
          </button>
          <button onClick={handleCount}>Add count</button>
          <h3>
            Current dataType: <strong>{dataType}</strong>
          </h3>

          <p>Click count: {counter}</p>
        </div>
      </StyledModal>
    </StyledOverlay>
  );
}
