//18.Create a React component that uses React Ref for DOM manipulation.
import React, { useRef } from 'react';
import './FocusInput.css'; // Optional: For styling

const FocusInput = () => {
  
  const inputRef = useRef(null);

  
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="focus-input-container">
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
