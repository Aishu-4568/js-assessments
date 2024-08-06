//2. Implement a counter component that increments when a button is clicked.

import React, { useState } from 'react';


const Counter = () => {
  
  const [count, setCount] = useState(0);

  
  const incrementCount = () => {
    setCount(count + 1);
  };

  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
