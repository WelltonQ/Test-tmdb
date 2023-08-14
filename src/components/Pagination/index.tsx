
interface PaginationTypes {
    handleCurrentPage: (page: number) => void;
    currentPage: number
    totalPages: number
}

export function Pagination({handleCurrentPage, currentPage, totalPages}: PaginationTypes) {
    const totalPagesLimited = totalPages > 500 ? 500 : totalPages
    const pagesToShow = 5;

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPagesLimited) {
          handleCurrentPage(newPage);
        }
      };
    
      const handleNextPage = () => {
        if (currentPage < totalPagesLimited) {
          handleCurrentPage(currentPage + 1);
        }
      };
    
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          handleCurrentPage(currentPage - 1);
        }
      };
  
      const handleFirstPage = () => {
        handleCurrentPage(1);
      };
    
      const handleLastPage = () => {
        handleCurrentPage(totalPagesLimited);
      };

      const renderPageNumbers = () => {
        const pageNumbers = [];
        const startIndex = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    
        for (let i = startIndex; i <= Math.min(totalPagesLimited, startIndex + pagesToShow - 1); i++) {
          pageNumbers.push(i);
        }
    
        return pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ));
      };
  
  return (
    <div className="pagination">
        {currentPage !== 1 && <button onClick={handleFirstPage} className='buttonPage'>Primeira</button>}
        {currentPage !== 1 && <button onClick={handlePreviousPage}>&lt;</button>}
        {renderPageNumbers()}
        <button onClick={handleNextPage}>&gt;</button>
        <button onClick={handleLastPage} className='buttonPage'>Última</button>
    </div>
  )
}
