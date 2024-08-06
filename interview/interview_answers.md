# Interview Questions

## 1. What is the difference between `var`, `let`, and `const` in JavaScript?

- **`var`:** Function-scoped or globally scoped.
Can be re-declared and updated.
It is hoisted.
- **`let`:** Block-scoped.
Can be updated but not re-declared in the same scope.
It is not hoisted.
- **`const`:** Block-scoped.
Cannot be updated or re-declared in the same scope.
It is not hoisted.

## 2. How do you create a new React component?
# Create a new file: 
Create a new file name the file according to the component's purpose,as pascalCase(eg.`MyComponent.js`).
# Import React :
Import React at the top of the code(`import React from 'react';)
# Define component:
Using arrow funtion create functional component.
# Return JavaScript:
Return JSX to define UI to our project which build exactly like HTML.
# Export the component:
Export the component.

- **Creating new component:**
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;

## 3. What is the purpose of the render() method in a React component?

- The `render()` method in a React component is responsible for defining the component's UI.
- It returns JSX which describes the component should appear on the web page.
- This method is for both class component and functional component.

## 4. How do you handle state changes in a React component?
- To handle state changes in React there two components.
1.`useState`
2.`setState`
- `useState` is use for functional component.
- `setState` is a method forn class component.
- These methods handle to manage and change in their internal data.

## 5. What is the difference between a controlled and uncontrolled component in React?
- Controlled and uncontrolled refers how form data is managed and accessed within the component.
# Countrolled component :
- This component controls the input value through state,making it the single source of truth for the input data.
- The data flows from the component's state to the form elemnt
- Useful for validation,dynamic forms.
# Uncontrolled component:
- This component is handled by the DOM itself,and the React component does not manage the input's state.
- You can use `ref` to access the DOM element's current value.
- Data is stored in the DOM,and React accesses it `ref`.

## 6. How do you pass props to a React component?
- The pass props are used them as attributes in the component's JSX tag.
- Props are key-value pairs,the key is the prop name and the value is the data you want to pass.

```Greeting.js```

import React from 'react';

const Greeting = (props) => {
  return (
    <h1>Hello, {props.name}!</h1>
  );
};

export default Greeting;

```App.js```
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Greeting name="Aishwarya" />
      <Greeting name="Balu" />
    </div>
  );
};
- From the above example Greeting.js is the props data and in the App.js is the values we have to pass.

## 7. What is the purpose of the key prop in a React component?
- In React component `key` prop is a special attribute used to uniquely identify elements in a list.
- Its's primary purpose is to help React identify which items have changed,added,or removed.

```key prop```
import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;

## 8. How do you handle events in a React component?
- In React component handling events are similar to handling events in regular DOM elements.
# Steps to habdle event

- Create a function to handle the event. This function can be defined as an arrow function.
- Attach the handler to an element using the appropriate event prop, such as `onClick`, `onChange`, `onSubmit`.
- The event handler automatically receives an event object as an argument, which contains information about the event.
```handle event```
import React,{ usestate } from 'react';
const ClickCounter =() => {
  const [count,setCount] =useState(0);
  const handleClick = () => {
    setCount(count+1);
};
return(
  <div>
  <p>bdhfjkjnrhfik {count} times.</p>
  <button> onClick={handleClick}>Click me!</button>
  <button onClick={handleClick}>Click me!</button>
  </div>
);
};
export default ClickCounter;

## 9. . What is the difference between a functional component and a class component in React?

# Funtional component:
- Funtional components are simple Javascript funtions that take props as an argument and return JSX. 
- Functional component do not use `this`.
- Can use hooks for state and lifecycle effects
- Uses hooks like `useState` and `useEffect` to manage state and side effect.
- More efficient.
- Functional components are typically used for simpler,presentational components.

# Class component:
- Class components are ES6 classes that extend `React.Component`.This inheritance gives class components access to a set of methods and properties.
- Class components require boilerplats code and use `this`.
- While class components use `this.state` and lifecycle methods.
- Class components were traditionally used for more complex, stateful components.

## 10. How do you use React Hooks?
- React hooks are functions that allow you to use state and other react features in functional components.
- We cannot call hooks inside loops,conditions or nested functions.
- Hooks are only used in functional components.
- Custom hooks can create that use built-in hooks.
- There some list of hooks:
1.`useState`: Uses to add state to a functional component.It returns an array containing the current state value and update it.
2.`useEffect`: Performs side effects in functional components,such as fetching data,directly interacting with the DOM.
3.`useConent`: This hook is used to access the current value and it retrieves the current theme data from `ThemeContent`.

<div style="background: lightblue; color: darkblue;">
  Themed Component
</div>

4.`useRef`: Allows you to create mutable object that persists across renders.It is commonly used to access DOM elements directly.
5.`useReducer`: It is alternative to `useState` for managing complex state logic.

## 11. What is the purpose of the useEffect() hook in React?
- In React we use `useEffect()` in the purpose of side effects in functional components.
# 1.Managing Side Effect:
Side effects means operations that interact with DOM like fetching data,subscriptions.
# 2.Synchronizing with the DOM:
We can interact with DOM like adding event listeners,modifing elements.
# 3.Fetching data:
It's commonly used to fetch data from an API or any other
# 4.Performing clean-up:
Need to cleanup the data,such as clearing intervals or unsubscribing from events.

useEffect(() => {
  // Code for side effect (e.g., data fetching, subscriptions)

  // Optional clean-up function
  return () => {
    // Clean-up code (e.g., clearing intervals, unsubscribing)
  };
}, [dependencies]); // Dependencies array

## 12. How do you fetch data from an API in a React component?
- In React component to ftech data we use API or other like Axios.
- The hooks we use is `useState` and `useEffect`.
# 1.Set up state:
Lets use `useState` hook to manage data fetching from the API.
# 2. Perform the fetch operation:
Here, use `useEffect` hook to run the fetch operation when the component mounts.Inside `useEffect`,use fetch to get data from the API.
# 3. Handle loading and error:
Manage loading and error states to provide feedback to the user.

```fetching```
import React,{useState,useEffect } from 'react';
const Datafetchingcomponent = () => {
  const [data,setdata] = useState(null);// State to store the fetched data
  const [loading,setloading] = useState(true);// State to manage the loading status
  const [erro,setError] = useState(null);// State to store any error that occurs
  useEffect(() =>{
    // Function to fetch data
    const fetchData = async ()=> {
try{
  const response = await fetch('https://api.example.com/data'); // Replace with your API URL
  if (1response.ok) {
    throw new Error('Network response was not ok');
  }
  const results = await response.json();
  setData(results);// Set the fetched data to state
}ctach(error){
  setError(error.message);// Set the error to state
}finally{
  setLoading(false);// Set loading to false once data fetching is complete
}
    };
    fetchData();// Call the fetch function
  }, []);// Empty dependency array means this effect runs once on mount
  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Render fetched data */}
    </div>
  );
};

export default Datafetchingcomponent;

## 13. What is the purpose of the useContext() hook in React?
- `useContext` hook is used to access the value of a context object n a functional component.It allows copmonents to subscribe to a context and access its value without needing to pass props down manually at every level
# 1. Create a Content:
using `React.createContext` the context object created.

const ThemeContext = React.createContext();
# 2. Provide a Content Value:
Use the `Provider` component to specify thevalue of the context.This is usually done in a parent componnent.

<ThemeContext.Provider value={{ background: 'lightblue', color: 'darkblue' }}>
  <App />
</ThemeContext.Provider>

# 3. Consume the context value:
To access the content value uses the `useContent`.

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      Themed Component
    </div>
  );
};

## 14. How do you use React Router for client-side routing?
- React Rouster is implemented client-side routing in React applictaion.It allows you to navigate between different components and views without reloading the page.
# Installation of React Router:

npm install react-router-dom
# Set up the router:

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
- The most common components to set are `BrowserRouter`, `Routes`, and `Route`.
# Define Routes as:
- Each Route component maps a URL path to a specific component.

import Home from './Home';
import About from './About';
import Contact from './Contact';
- Home Component: Render when the path is `/`.
- About Component:Render when the path is `/about`.
- Contact Component: Render when the path is `/contact`.

## 15. What is the difference between useState() and useReducer() in React?
- `useState` is a simple hook that allows you to add state to a functional component. It's used for managing local state that doesn't involve complex logic or multiple state transitions.
- SYNTAX:const [state, setState] = useState(initialState);
- Directly updates state with new values.
- `useReducer` is a more advanced hook that is used for managing more complex state logic. It is similar to the reducer pattern in Redux and is useful when the state transitions are complex or when the next state depends on the previous state.
- SYNTAX:const [state, dispatch] = useReducer(reducer, initialState);
- Uses actions, which are objects that describe the type of update to perform.

## 16. How do you optimize the performance of a React application?
- Optimizing the performance of a React application involves various strategies and best practices to ensure smooth rendering, fast loading times, and efficient data management.
- There are some key points optimize the performance of a React. 
# 1. Code splitted and lazy loading:
  Code Splitting: Break down your application into smaller bundles that can be loaded on demand.
  Lazy Loading: Use `React.lazy()` and `Suspense` to load components only when they are needed, such as when a route is accessed.
# 2.Memoization:
useMemo: Use `useMemo` to memoize expensive calculations so that they are only recomputed when their dependencies change.
useCallback: Use `useCallback` to memoize functions and avoid unnecessary re-creation of functions on every render.
# 3. Optimizing Component Renders:
PureComponent and React.memo: Use `PureComponen`t or `React.memo` to prevent unnecessary re-renders by performing a shallow comparison of props and state.
shouldComponentUpdate: Implement `shouldComponentUpdate` in class components to control when components should re-render.
# 4.Avoid Anonymous Function in JSX:
Avoid defining functions inline in JSX as it creates a new function instance on every render, potentially causing unnecessary re-renders.

## 17. What is the purpose of the shouldComponentUpdate() method in a React component?
- The `shouldComponentUpdate()` method in a React class component is a lifecycle method that determines whether a component should re-render when it receives new props or state. It allows you to control the rendering process and optimize performance by preventing unnecessary re-renders.
# 1.Performance Optimization:
The primary purpose of `shouldComponentUpdate()` is to improve the performance of a React application. By default, React re-renders a component whenever its props or state change.
# 2.Conditional Rendering:
`shouldComponentUpdate()` provides a way to implement conditional rendering logic.

## 18. How do you use React DevTools for debugging?
- The use of React DevTools is to facilitate the development, debugging, and optimization of React applications. It provides developers with a set of tools to inspect and interact with the React component hierarchy.
- 1.Component Inspection
- 2.Debugging
- 3.Performance Optimization
- 4.Context and hooks Insepection

## 19.What is the difference between a Higher-Order Component (HOC) and a Render Props pattern in React?
Higher-Order Components (HOC):
- A Higher-Order Component is a function that takes a component and returns a new component. HOCs are used to add additional behavior or functionality to an existing component.
- Often used when you need to add behavior or props to a component without altering its structure.
- Result in a new component that wraps the original one. This can sometimes lead to complex nested structures if multiple HOCs are used.
-  Can potentially cause unnecessary re-renders if not implemented carefully, especially when new props are injected.

Render Props:
- Render Props is a pattern in which a component accepts a function as a prop. This function returns a React element and provides the opportunity to customize the rendering.
- Give the user full control over rendering, passing a function to determine the output. It allows for a more granular level of control over what gets rendered.
- Used when you want to share state or logic across different components but retain control over the rendering.
- No additional component layer; instead, the render prop function directly controls what is rendered.
- Can lead to more frequent re-renders since the render function is called on every render, even if the props don’t change.

## 20. How do you use React with TypeScript?
- Create React App supports TypeScript out of the box. You can set up a new React project with TypeScript using the following command:
npx create-react-app my-app --template typescript
# 1.Install TypeScript and Type Definitions:
npm install typescript @types/node @types/react @types/react-dom @types/jest
Props and State:

1.Props: Define the props type and use it in your component.
import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;

2.State: Use TypeScript's generics to define state types.
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;




