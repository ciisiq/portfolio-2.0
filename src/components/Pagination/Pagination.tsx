import './Pagination.css';

export default function Pagination({
  handlePrevPage,
  handleNextPage,
  currentPage,
}) {
  return (
    <div className="pagination-container">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev Page
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
