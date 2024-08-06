//20.Implement a React component that displays a list of items with virtualization.
import React from 'react';
import { FixedSizeList as List } from 'react-window';


const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);


const Row = ({ index, style }) => (
  <div style={style} className="list-item">
    {items[index]}
  </div>
);

const VirtualizedList = () => {
  return (
    <List
      height={600}          
      itemCount={items.length}  
      itemSize={35}         
      width={300}           
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
