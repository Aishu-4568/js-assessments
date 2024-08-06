//11.Implement a React component that displays a list of items with infinite scrolling.
import React, { useState, useEffect, useRef } from 'react';


const fetchItems = (page) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 10 }, (_, index) => `Item ${page * 10 + index + 1}`));
    }, 1000);
  });
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    
    fetchItems(page).then(newItems => {
      setItems(prevItems => [...prevItems, ...newItems]);
      setHasMore(newItems.length > 0); // Check if more items are available
    });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {hasMore && <div ref={loaderRef}>Loading more items...</div>}
    </div>
  );
};

export default InfiniteScrollList;
