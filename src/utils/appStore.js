

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Adjust the path as needed
import moviesReducer from './movieSlice'; // Adjust the path as needed
import gptSliceReducer from './gptSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    GptSearch : gptSliceReducer
  },
  // Middleware for Redux DevTools is included by default
});

export default store;
