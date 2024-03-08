import './Filter.css';

interface FilterProps {
  categories: string[];
  onSelectCategory: (selectedCategory: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="filter">
      <div className="headline">
        <h2>Filter by Category</h2>
        <div className="line"></div>
      </div>

      <div className="category-filter">
        <button className="select" onClick={() => onSelectCategory('')}>
          All
        </button>
        {categories.map((cat, index) => (
          <button
            className="select"
            key={index}
            onClick={() => onSelectCategory(cat)}
          >
            {' '}
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
