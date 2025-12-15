export const getGifs = async (category, limit = 36) => {
  const apiKey = 'xwuy7ZWK67BGNdoj7BbUoHhXIYsP4V3d'; 
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=${limit}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('Error en la respuesta: ' + resp.status);

    const { data } = await resp.json();

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title || 'GIF',
      url: img.images?.fixed_width?.url || img.images?.downsized?.url || '',
    }));

    return gifs;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    return [];
  }
}
