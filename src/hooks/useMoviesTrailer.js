import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowTrailers } from "../utils/movieSlice";

const useMoviesTrailer = (id) => {
  const dispatch = useDispatch();
  const key = useSelector((store) => store.movies?.atNowTrailer);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          API_OPTIONS
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data)
        setVideos(data.results);
        const trailers = data.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = trailers.length ? trailers[2] : data.results[0];
        console.log(trailers)
        if (trailer) {
          dispatch(addNowTrailers(trailer.key));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVideos();
    }
  }, [id, dispatch]);

  return { videos, loading, error };
};

export default useMoviesTrailer;
