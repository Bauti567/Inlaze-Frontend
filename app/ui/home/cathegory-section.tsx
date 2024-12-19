import React, { useState, useEffect } from 'react';
import MoviesGrid from '../movie/movie-card-grid';
import PageButton from './page-button';
import { fetchMovies } from '@/app/lib/data';

interface CategorySectionProps {
  title: string;
  category: string;
  query: string;
  selectedGenre: string;
}

const CategorySection = ({
  title,
  category,
  query,
  selectedGenre,
}: CategorySectionProps) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAndSetMovies = async () => {
    setIsLoading(true);
    try {
      const allMovies = await fetchMovies(category, currentPage);

      const filteredMovies = allMovies.filter((movie: any) => {
        const matchesQuery = query
          ? movie.title.toLowerCase().includes(query.toLowerCase())
          : true;
        const matchesGenre = selectedGenre
          ? movie.genre_ids.includes(Number(selectedGenre))
          : true;
        return matchesQuery && matchesGenre;
      });

      setMovies(filteredMovies.slice(0, 10));
    } catch (error) {
      console.error(`Error loading ${category} movies:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetMovies();
  }, [category, currentPage, selectedGenre, query]);

  return (
    <section className="mb-8">
      <h2 className="text-white font-bold text-2xl mb-4">{title}</h2>
      {isLoading ? (
        <div className="flex justify-center">
          <p className="text-gray-400">Loading movies...</p>
        </div>
      ) : (
        <MoviesGrid movies={movies} />
      )}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <PageButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </PageButton>
        <span className="text-white">{`Page ${currentPage}`}</span>
        <PageButton
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={movies.length < 10}
        >
          Next
        </PageButton>
      </div>
    </section>
  );
};

export default CategorySection;
