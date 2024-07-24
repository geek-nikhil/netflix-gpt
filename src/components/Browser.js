import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovies();
  console.log("sfn")
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* Additional content can be added here */}
    </div>
  );
};

export default Browser;
