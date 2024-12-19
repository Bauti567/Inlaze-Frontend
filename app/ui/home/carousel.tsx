'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Ratio from '../movie/ratio';
import { Heart } from '../movie/heart';
import { fetchTopRated } from '@/app/lib/data';

interface Film {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

function Carousel() {
  const [films, setFilms] = useState<Film[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopRated();
      setFilms(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        films.length > 0 ? (prevIndex + 1) % films.length : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [films]);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {films.map((film, index) => (
        <div
          key={film.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={`https://image.tmdb.org/t/p/w1280${film.backdrop_path}`}
              alt={film.title}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          <div className="absolute bottom-24 left-4 text-white p-2 sm:bottom-32">
            <h5 className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[35px] font-bold leading-tight line-clamp-2">
              {film.title}
            </h5>
          </div>

          <div className="absolute bottom-8 left-4 text-white p-2 max-w-[90%] sm:bottom-16">
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-snug line-clamp-3 md:line-clamp-4">
              {film.overview}
            </p>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:gap-4">
            <Heart
              movie={{
                id: film.id,
                title: film.title,
                imageUrl: film.backdrop_path
                  ? `https://image.tmdb.org/t/p/w1280${film.backdrop_path}`
                  : null,
                releaseDate: null,
                voteAverage: film.vote_average,
              }}
            />
            <div className="w-[64px] sm:w-[72px]">
              <Ratio voteAverage={film.vote_average} size={64} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
