import Image from 'next/image';

interface MoviePosterProps {
  posterImage: string;
  title: string;
}

const MoviePoster = ({ posterImage, title }: MoviePosterProps) => (
  <div className="flex-shrink-0 p-4">
    <Image
      src={posterImage}
      alt={title}
      width={305}
      height={395}
      className="object-cover rounded-md"
    />
  </div>
);

export default MoviePoster;
