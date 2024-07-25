import { API_OPTIONS } from "../utils/constants";
import { addPopulargMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const usePopularMovies = () => {
  
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const json = await response.json();
      console.log(json)
      dispatch(addPopulargMovies(json));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
  
  
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
