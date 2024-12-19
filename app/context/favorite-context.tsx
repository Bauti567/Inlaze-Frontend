'use client';

import React, { createContext, useContext, useState } from 'react';

interface FavoriteMovie {
  id: number;
  title: string;
  imageUrl: string | null;
  releaseDate: string | null;
  voteAverage: number;
}

interface FavoritesContextType {
  favorites: FavoriteMovie[];
  toggleFavorite: (movie: FavoriteMovie) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

  const toggleFavorite = (movie: FavoriteMovie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === movie.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
