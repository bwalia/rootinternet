'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ currentPage, totalPages }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    const handlePagination = (pageNumber) => {
      let queryParams = `page=${pageNumber}`
      if (searchParams.has('month')) queryParams = `${queryParams}&month=${searchParams.get('month')}`;
      if (searchParams.has('year')) queryParams = `${queryParams}&year=${searchParams.get('year')}`;
      router.push(`/blog?${queryParams}`);
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