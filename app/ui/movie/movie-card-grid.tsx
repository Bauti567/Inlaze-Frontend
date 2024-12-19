'use client';

import MovieCard from './movie-card';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

interface MoviesGridProps {
  movies: Movie[] | undefined;
}

const MoviesGrid = ({ movies }: MoviesGridProps) => {
  if (!movies || movies.length === 0) {
    return (
      <p className="text-center text-white">No recommendations available.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2 sm:p-4 mx-auto max-w-full movie-card-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imageUrl={movie.poster_path}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MoviesGrid;
