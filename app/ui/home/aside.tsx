import React from 'react';
import SearchBar from './search-bar';
import GenreFilter from './genre-filter';

interface AsideProps {
  setQuery: (query: string) => void;
  setGenre: (genre: string) => void;
}

const Aside = ({ setQuery, setGenre }: AsideProps) => (
  <aside className="w-full sm:w-[300px] p-5 text-white bg-[#262626] fixed sm:static bottom-0 left-0 sm:top-0 sm:left-auto z-40 sm:z-10">
    <SearchBar onSearch={setQuery} />
    <GenreFilter onGenreSelect={setGenre} />
  </aside>
);

export default Aside;
