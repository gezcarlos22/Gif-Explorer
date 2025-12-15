import PropTypes from 'prop-types';

export const Header = ({ onClearCategories, isScrolled, isDark, toggleTheme }) => {
  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="header-title">🎬 GIF Explorer</h1>
        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-btn">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button onClick={onClearCategories} className="clear-btn">
            Limpiar Todo
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onClearCategories: PropTypes.func.isRequired,
  isScrolled: PropTypes.bool.isRequired,
  isDark: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};