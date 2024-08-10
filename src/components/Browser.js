import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies"; // Corrected hook name
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

const Browser = () => {
  const pre = useSelector((store) => store.movies);
  const gptSearchView = useSelector((store) => store.GptSearch?.gptSearchView);

  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setPreloader(!pre);
    }, 2000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [pre]);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
      <Header />
      {preloader ? (
        <>
          {/* <img
          className="sm:absolute sm:left-80 sm:opacity-50"
            src="https://i.pinimg.com/originals/59/22/20/5922208e18658f5e83b6ad801b895f71.gif"
            alt="safe"
          /> */}
        </>
      ) : gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <div>
            <SecondaryContainer />
          </div>
        </>
      )}
      {/* Additional content can be added here */}
    </div>
  );
};

export default Browser;
