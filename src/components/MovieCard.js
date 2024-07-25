import React from 'react';

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null; // Return null if no movie data is passed
  }

  return (
    <div className="w-90">
      <img
        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
