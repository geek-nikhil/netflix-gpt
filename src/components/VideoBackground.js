import React from "react";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import { useSelector } from "react-redux";

const MovieTrailerComponent = ({ id }) => {
  const key = useSelector((store) => store.movies.atNowTrailer);
  console.log(key);
  useMoviesTrailer(id);
  console.log(id);
  return (
    <div>
      <iframe
        className="w-screen h-svh"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1 `} 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MovieTrailerComponent;
