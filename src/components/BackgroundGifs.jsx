import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

const BACKGROUND_CATEGORIES = ['abstract', 'colors', 'space', 'nature', 'particles'];

export const BackgroundGifs = () => {
  const [backgroundGifs, setBackgroundGifs] = useState([]);

  useEffect(() => {
    const loadBackgroundGifs = async () => {
      try {
        const randomCategory = BACKGROUND_CATEGORIES[Math.floor(Math.random() * BACKGROUND_CATEGORIES.length)];
        const gifs = await getGifs(randomCategory);
        setBackgroundGifs(gifs.slice(0, 6));
      } catch (error) {
        console.error('Error loading background gifs:', error);
      }
    };

    loadBackgroundGifs();
    const interval = setInterval(loadBackgroundGifs, 30000); // Cambiar cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-gifs">
      {backgroundGifs.map((gif, index) => (
        <img
          key={gif.id}
          src={gif.url}
          alt=""
          className={`bg-gif bg-gif-${index + 1}`}
        />
      ))}
    </div>
  );
};