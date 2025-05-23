// src/components/SearchBar.jsx
function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        placeholder="Search coin..."
        className="px-4 py-2 border rounded-md shadow-sm w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
