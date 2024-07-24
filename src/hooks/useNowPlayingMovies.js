import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const useNowPlayingMovies = () => {
  
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const json = await response.json();
      dispatch(addNowPlayingMovies(json));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
  
  
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
