import "./Filter.scss";

type FilterProps = {
  label: string;
  options: string[];
  selectedFilter: string;
  onFilterChange: (value: string) => void;
};

const Filter = ({
  label,
  options,
  selectedFilter,
  onFilterChange,
}: FilterProps) => {
  return (
    <div className="filter">
      <label htmlFor="filterSelect" className="filter__label">
        {`Filter by ${label}`}
      </label>
      <select
        className="filter__select"
        name="filterSelect"
        id="filterSelect"
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option className="filter__option" value="All">
          All
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="filter__option">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
