import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";
import filterReducer from './movies/filterSearchSlice'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    filter: filterReducer
  },
});
