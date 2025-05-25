export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-md bg-[#0f172a] border border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />
    </div>
  );
}
