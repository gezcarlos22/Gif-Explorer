import PropTypes from 'prop-types';

const PREDEFINED_CATEGORIES = [
  { name: 'Anime', emoji: '🎌' },
  { name: 'Funny', emoji: '😂' },
  { name: 'Movies', emoji: '🎬' },
  { name: 'Gaming', emoji: '🎮' },
  { name: 'Sports', emoji: '⚽' },
  { name: 'Music', emoji: '🎵' },
  { name: 'Animals', emoji: '🐾' },
  { name: 'Food', emoji: '🍕' },
  { name: 'Nature', emoji: '🌿' },
  { name: 'Love', emoji: '💕' },
  { name: 'Memes', emoji: '😎' },
  { name: 'Dance', emoji: '💃' },
];

export const CategorySelector = ({ onSelectCategory, selectedCategories }) => {
  return (
    <div className="category-selector">
      <h2 className="category-title">Categorías Populares</h2>
      <div className="category-grid">
        {PREDEFINED_CATEGORIES.map((category) => (
          <button
            key={category.name}
            onClick={() => onSelectCategory(category.name)}
            className={`category-btn ${
              selectedCategories.includes(category.name) ? 'active' : ''
            }`}
          >
            <span className="category-emoji">{category.emoji}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

CategorySelector.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
  selectedCategories: PropTypes.array.isRequired,
};