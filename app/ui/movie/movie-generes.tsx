const MovieGenres = ({
  genres,
}: {
  genres: { id: number; name: string }[];
}) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">Genres</h3>
    <div className="flex gap-2">
      {genres.map((genre) => (
        <span
          key={genre.id}
          className="text-[#F1CB51] border-2 border-[#F1CB51] text-sm px-4 py-2 rounded-lg"
        >
          {genre.name}
        </span>
      ))}
    </div>
  </div>
);

export default MovieGenres;
