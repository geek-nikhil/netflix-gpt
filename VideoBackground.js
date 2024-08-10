import React from "react";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import { useSelector } from "react-redux";

const MovieTrailerComponent = ({ id }) => {
  const key = useSelector((store) => store.movies.atNowTrailer);
  useMoviesTrailer(id);
  return (
    <div>
       <iframe
        className="sm:w-screen sm:h-svh w-full h-72 relative"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&playlist=${key}&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailerComponent;
