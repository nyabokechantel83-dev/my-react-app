function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <h2>Search Projects</h2>

      <input
        type="text"
        placeholder="Search by project title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;