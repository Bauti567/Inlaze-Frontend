'use client';
import { useFavorites } from '@/app/context/favorite-context';
import MovieCard from './movie-card';

const FavoritesGrid = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p></p>;
  }

  return (
    <div className="mb-8">
      <h2 className="text-white font-bold text-2xl mb-4">Favorites</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            imageUrl={movie.imageUrl}
            voteAverage={movie.voteAverage}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesGrid;
