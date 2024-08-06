//14. Implement a React component that displays a list of items with filtering and sorting.
import React, { useState } from 'react';


const initialItems = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.2 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.7 },
  { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.5 },
];

const ItemList = () => {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('nameAsc');

  
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  
  const sortedItems = filteredItems.sort((a, b) => {
    if (sort === 'nameAsc') {
      return a.name.localeCompare(b.name);
    } else if (sort === 'nameDesc') {
      return b.name.localeCompare(a.name);
    } else if (sort === 'priceAsc') {
      return a.price - b.price;
    } else if (sort === 'priceDesc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <h1>Item List</h1>
      
      <div>
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="nameAsc">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
        </select>
      </div>
      
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.category} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
