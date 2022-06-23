import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";
import filterReducer from "./movies/filterSearchSlice";
import loginReducer from "./movies/loginSlice"

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    filter: filterReducer,
    login: loginReducer,
  },
});
