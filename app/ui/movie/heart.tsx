import { useFavorites } from '@/app/context/favorite-context';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

interface HeartProps {
  movie: {
    id: number;
    title: string;
    imageUrl: string | null;
    releaseDate: string | null;
    voteAverage: number;
  };
}

export const Heart = ({ movie }: HeartProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  if (!movie) return null;

  const liked = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <div
      className={`cursor-pointer transition-transform ${liked ? 'scale-110' : 'scale-100'}`}
      onClick={handleFavoriteToggle}
    >
      {liked ? (
        <HeartSolid className="w-6 h-6 text-red-500 animate-pulse" />
      ) : (
        <HeartOutline className="w-6 h-6 text-gray-400" />
      )}
    </div>
  );
};
