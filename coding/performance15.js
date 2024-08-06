//15. Create a React component that uses React Memo for performance optimization.
import React from 'react';


const ChildComponent = ({ count, onClick }) => {
  console.log('ChildComponent rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );
};

export default ChildComponent;
