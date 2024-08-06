//5.Implement a React component that displays a list of items with pagination.
import React, { useState } from 'react';


const PaginatedList = () => {
  
  const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  
  const totalPages = Math.ceil(items.length / itemsPerPage);

  
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h2>Paginated List</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
