function SearchBar({ word, setWord }) {
  return (
    <div className="search-bar">
      <h2>Search Projects</h2>

      <input
        type="text"
        placeholder="Search projects"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
