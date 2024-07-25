import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
      populargMovies:[],
    nowPlayingMovies: [],
    topRatedMovies:[],
    atNowTrailer: [],
    upcomingMovies:[]
  },
  reducers: {
    // Reducer to add now playing movies to the state
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopulargMovies: (state, action) => {
      state.populargMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    // Reducer to add trailers to the state
    addNowTrailers: (state, action) => {
      state.atNowTrailer = action.payload;
    },
  },
});

// Export the action creators
export const { addNowPlayingMovies, addNowTrailers ,addPopulargMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions;

// Export the reducer
export default moviesSlice.reducer;
