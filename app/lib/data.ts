const API_KEY = '95f50caa461c4aeecaff28e0a6458241';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(category: string, page: number, genre: string = '', query: string = '') {
  const baseUrl = `https://api.themoviedb.org/3/movie/${category}`;
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: String(page),
    with_genres: genre,
    query,
  });

  const response = await fetch(`${baseUrl}?${params.toString()}`);
  const data = await response.json();

  return data.results || [];
}


export async function fetchTopRated() {
  try {
    const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Top Rated movies:', error);
    return [];
  }
}

export async function fetchPopular() {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Popular movies:', error);
    return [];
  }
}

export async function fetchNowPlaying() {
  try {
    const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Now Playing movies:', error);
    return [];
  }
}

export async function fetchUpcoming() {
  try {
    const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Upcoming movies:', error);
    return [];
  }
}

export async function fetchMovieDetails(movieId: string) {
  try {
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error('Failed to fetch movie details');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching Movie Details:', error);
    throw error;
  }
}

export async function fetchMovieCredits(movieId: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch movie credits');
    }
    const data = await res.json();
    return data.cast; 
  } catch (error) {
    console.error('Error fetching Movie Credits:', error);
    return [];
  }
}

export async function fetchMovieRecommendations(movieId: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
}
