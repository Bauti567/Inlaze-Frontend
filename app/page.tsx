'use client';

import { useState } from 'react';
import { FavoritesProvider } from './context/favorite-context';
import Navbar from './ui/home/navbar';
import Carousel from './ui/home/carousel';
import Aside from './ui/home/aside';
import CategorySection from './ui/home/cathegory-section';
import FavoritesGrid from './ui/movie/favorites-grid';

const categories = {
  popular: 'popular',
  now_playing: 'now_playing',
  upcoming: 'upcoming',
  top_rated: 'top_rated',
};

export default function Page() {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  return (
    <FavoritesProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Carousel />
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-200px)]">
          <Aside setQuery={setQuery} setGenre={setSelectedGenre} />
          <div className="flex-1 p-4 md:p-8">
            <FavoritesGrid />
            {Object.entries(categories).map(([key, value]) => (
              <CategorySection
                key={key}
                title={key.replace('_', ' ').toUpperCase()}
                category={value}
                query={query}
                selectedGenre={selectedGenre}
              />
            ))}
          </div>
        </div>
      </div>
    </FavoritesProvider>
  );
}
