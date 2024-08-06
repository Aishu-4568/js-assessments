//10.Write a React component that uses React Context for state management.
import React, { createContext, useState, useContext } from 'react';


const CounterContext = createContext();


export const useCounter = () => useContext(CounterContext);


export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
