import { useState } from 'react';
import PropTypes from 'prop-types';

const TRENDING_TERMS = [
  'funny cats', 'reaction', 'happy dance', 'mind blown', 'facepalm',
  'thumbs up', 'crying', 'excited', 'shocked', 'applause',
  'love', 'angry', 'confused', 'sleepy', 'party'
];

export const SearchHero = ({ onNewCategory, categorySelector }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <section className="search-hero">
      <h1 className="hero-title">🎬 Descubre GIFs Increíbles</h1>
      <p className="hero-subtitle">Busca y explora millones de GIFs animados</p>
      <form onSubmit={onSubmit} className="hero-search-form">
        <input
          type="text"
          placeholder="¿Qué GIF estás buscando?"
          value={inputValue}
          onChange={onInputChange}
          className="hero-search-input"
        />
        <button type="submit" className="hero-search-btn">
          Buscar
        </button>
      </form>
      
      <div className="trending-section">
        <h3 className="trending-title">Más Buscado</h3>
        <div className="trending-tags">
          {TRENDING_TERMS.map((term) => (
            <button
              key={term}
              onClick={() => onNewCategory(term)}
              className="trending-tag"
            >
              {term}
            </button>
          ))}
          {TRENDING_TERMS.map((term) => (
            <button
              key={`${term}-duplicate`}
              onClick={() => onNewCategory(term)}
              className="trending-tag"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
      
      <div className="hero-categories">
        {categorySelector}
      </div>
    </section>
  );
};

SearchHero.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
  categorySelector: PropTypes.node.isRequired,
};