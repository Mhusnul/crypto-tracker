export default function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center mt-8 gap-4">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 rounded bg-[#334155] hover:bg-[#475569] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Prev
      </button>
      <span className="text-gray-400 self-center">Page {page}</span>
      <button
        onClick={() => setPage((p) => p + 1)}
        className="px-4 py-2 rounded bg-[#334155] hover:bg-[#475569] transition"
      >
        Next
      </button>
    </div>
  );
}
