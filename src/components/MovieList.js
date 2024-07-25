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
    <div className='-mt-28 relative'>
        <div className='mb-40 z-50'>
        <h2 className='text-white font-semibold text-2xl'>{title}</h2>
      <div className='overflow-x-scroll no-scrollbar '>
      <div className='flex space-x-6'>
        {movieList.map((movie) => (
            <div className='w-60 flex-shrink-0'>
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
