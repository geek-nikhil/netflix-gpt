

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Adjust the path as needed
import moviesReducer from './movieSlice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
  // Middleware for Redux DevTools is included by default
});

export default store;
