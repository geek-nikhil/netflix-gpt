import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const useUpcomingMovies = () => {
  
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const json = await response.json();
      console.log(json)
      dispatch(addUpcomingMovies(json));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
  
  
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
