//2.Write a React component that displays a list of items from an array.
import React from 'react';


const ItemList = () => {
  
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {/* Iterate over the items array using map and render each item */}
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
