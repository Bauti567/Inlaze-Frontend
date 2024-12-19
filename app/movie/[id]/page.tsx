import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieRecommendations,
} from '@/app/lib/data';
import MoviePoster from '@/app/ui/movie/movie-poster';
import MovieInfo from '@/app/ui/movie/movie-info';
import MovieGenres from '@/app/ui/movie/movie-generes';
import Ratio from '@/app/ui/movie/ratio';
import MoviesGrid from '@/app/ui/movie/movie-card-grid';
import Breadcrumb from '@/app/ui/movie/movie-breadcrumb';
import FavoritesGrid from '@/app/ui/movie/favorites-grid';

interface PageProps {
  params: {
    id: string;
  };
}

interface Actor {
  id: number;
  name: string;
  character: string;
}

export default async function MovieDetails({ params }: PageProps) {
  const { id: movieId } = params;

  try {
    const movie = await fetchMovieDetails(movieId);
    const credits = await fetchMovieCredits(movieId);
    const recommendations = await fetchMovieRecommendations(movieId);

    const backgroundImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
      <>
        <Breadcrumb />
        <div
          className="min-h-screen bg-cover bg-center text-white flex items-center p-8 bg-opacity-75 bg-black"
          style={{
            backgroundImage: `linear-gradient(0.87deg, #000000 19.5%, rgba(102, 102, 102, 0) 99.2%), url(${backgroundImage})`,
          }}
        >
          <div className="rounded-lg flex flex-col md:flex-row gap-8 w-full">
            <MoviePoster posterImage={posterImage} title={movie.title} />
            <div className="flex-1">
              <MovieInfo
                title={movie.title}
                releaseDate={movie.release_date}
                runtime={movie.runtime}
              />
              <h2 className="text-2xl font-semibold mb-2 text-lg md:text-2xl">
                Overview
              </h2>
              <p className="text-lg text-gray-300 mb-6">{movie.overview}</p>
              <div className="mt-6 flex items-center">
                <h3 className="text-lg font-semibold mb-2 mr-4">
                  Audience Score
                </h3>
                <Ratio voteAverage={movie.vote_average} size={92} />
              </div>
              <MovieGenres genres={movie.genres} />
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Cast</h3>
                <ul className="flex flex-wrap gap-4 text-gray-300">
                  {credits.slice(0, 10).map((actor: Actor) => (
                    <li key={actor.id} className="flex items-center mb-2">
                      <span className="font-semibold">{actor.name}</span> as{' '}
                      {actor.character}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto px-4">
            <FavoritesGrid/>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Recommendations
            </h3>
            <MoviesGrid movies={recommendations} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error loading movie details:', error);
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Error</h1>
          <p>Failed to load movie details. Please try again later.</p>
        </div>
      </div>
    );
  }
}
