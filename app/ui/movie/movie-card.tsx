import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Ratio from './ratio';
import { Heart } from './heart';

interface MovieCardProps {
  id: number;
  title: string;
  releaseDate: string | null;
  imageUrl: string | null;
  voteAverage: number;
}

export default function MovieCard({
  id,
  title,
  releaseDate,
  imageUrl,
  voteAverage,
}: MovieCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie/${id}`);
  };

  const validVoteAverage = !isNaN(voteAverage) ? voteAverage : 0;
  const placeholderImage = '/placeholder.png';

  return (
    <div
      className="bg-[#262626] rounded-lg shadow-lg w-[200px] h-[335px] cursor-pointer hover:scale-105 transition-transform relative"
      onClick={handleClick}
    >
      <div className="relative w-[200px] h-[223px]">
        <Image
          src={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : placeholderImage
          }
          alt={title || 'Untitled movie'}
          fill
          className="object-cover rounded-t-md"
          sizes="200px"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-white font-bold text-sm truncate">
          {title || 'Untitled'}
        </h3>
        <p className="text-gray-400 text-xs">
          {releaseDate || 'Release date unknown'}
        </p>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 items-center">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-[10px] mb-1">Rating</span>
          <Ratio voteAverage={validVoteAverage} size={25} />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-[10px] mb-1">Favorite</span>
          <Heart movie={{ id, title, releaseDate, imageUrl, voteAverage }} />
        </div>
      </div>
    </div>
  );
}
