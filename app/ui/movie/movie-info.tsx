const MovieInfo = ({
  title,
  releaseDate,
  runtime,
}: {
  title: string;
  releaseDate: string;
  runtime: number;
}) => (
  <div className="flex-1">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <div className="text-sm text-gray-300 flex items-center justify-between gap-4 mb-8">
      <p>{new Date(releaseDate).toLocaleDateString()}</p>
      <p className="text-right">{runtime} min</p>
    </div>
  </div>
);

export default MovieInfo;
