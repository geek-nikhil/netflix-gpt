import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
export default function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (

    <div>
   <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
   <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
   <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
   <MovieList title={"Popular"} movies={movies.populargMovies}/>
     </div>
  )
}
