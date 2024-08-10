import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // Ensure movies is defined and has results
  if (!movies || !movies.results || !movies.results.length || movies.results[0] === null) {
    return null;
  }

   const {original_title, overview , id } = movies.results[0];
     return (
    <div>
      <VideoTitle  title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
}
