//3.Create a React component that fetches data from an API and displays it.
import React, { useState, useEffect } from 'react';


const DataFetcher = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
    
        const result = await response.json();
        
        
        setData(result);
      } catch (error) {
        
        setError(error.message);
      } finally {
        
        setLoading(false);
      }
    };

    
    fetchData();
  }, []); 

  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
