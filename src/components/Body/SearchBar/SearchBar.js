import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search"
        type="text"
        placeholder="Search Restaurants here"
      />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
