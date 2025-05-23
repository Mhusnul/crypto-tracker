// src/components/Pagination.jsx
function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center mt-6 gap-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        ⬅ Prev
      </button>
      <span className="flex items-center font-semibold">Page {page}</span>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Next ➡
      </button>
    </div>
  );
}

export default Pagination;
