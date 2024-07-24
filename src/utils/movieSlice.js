import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: [],
    atNowTrailer: [],
  },
  reducers: {
    // Reducer to add now playing movies to the state
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    // Reducer to add trailers to the state
    addNowTrailers: (state, action) => {
      state.atNowTrailer = action.payload;
    },
  },
});

// Export the action creators
export const { addNowPlayingMovies, addNowTrailers } = moviesSlice.actions;

// Export the reducer
export default moviesSlice.reducer;
