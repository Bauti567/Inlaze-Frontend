import { useState, useEffect } from 'react';

type Genre = {
  id: number;
  name: string;
};

const GenreFilter = ({
  onGenreSelect,
}: {
  onGenreSelect: (genre: string) => void;
}) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGenres = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=95f50caa461c4aeecaff28e0a6458241&language=en-US`
      );
      const data = await response.json();
      if (data.genres) {
        setGenres(data.genres);
      } else {
        setError('Failed to fetch genres');
      }
    } catch (error) {
      console.error('Error fetching genres:', error);
      setError('Failed to fetch genres');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  if (loading) {
    return <div className="text-gray-400">Loading genres...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500">
        {error}
        <button
          onClick={fetchGenres}
          className="ml-4 bg-blue-500 text-white px-2 py-1 rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <label
        htmlFor="genre-filter"
        className="block mb-2 text-white font-medium"
      >
        Select Genre:
      </label>
      <select
        id="genre-filter"
        onChange={(e) => onGenreSelect(e.target.value)}
        className="w-full p-2 border border-gray-700 rounded-md bg-[#1C1C1C] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select a movie genre"
      >
        <option value="">----------</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
