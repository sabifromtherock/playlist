import "./SearchBar.scss";

interface SearchBarProps {
  onSearchChange: (text: string) => void;
}

const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <label className="search-bar__label">Search Track:</label>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Enter text to filter tracks"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
