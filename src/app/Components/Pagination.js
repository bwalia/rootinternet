'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Pagination = ({ currentPage, totalPages }) => {
    const router = useRouter();
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    const handlePagination = (pageNumber) => {
      router.push(`/blogs?page=${pageNumber}`);
    };
  
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button onClick={() => handlePagination(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Pagination