import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // Log the title and the movies array for debugging purposes
  console.log(title);
  console.log(movies.results);

  // Extract the results from the movies object
  const movieList = movies?.results||[];

  return (
    <>
    <div className='relative'>
        <div className='z-50'>
        <h2 className='text-white font-semibold text-2xl ml-4'>{title}</h2>
      <div className='overflow-x-scroll no-scrollbar '>
      <div className='flex space-x-6 mb-8 ml-4'>
        {movieList.map((movie) => (
            <div className='sm:w-60 w-28 sm:h-full flex-shrink-0'>
          <MovieCard movie={movie} /> 
      </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default MovieList;
