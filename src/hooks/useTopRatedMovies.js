import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const useTopRated = () => {
  
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const json = await response.json();
      console.log(json)
      dispatch(addTopRatedMovies(json));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
  
  
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRated;
