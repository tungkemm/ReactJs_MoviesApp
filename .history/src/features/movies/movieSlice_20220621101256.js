import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsynCMovies",
  async () => {
    try {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      );
      return response.data;
    } catch (error) {
      console.log("loi call api", error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    try {
      const movieText = "Friends";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=series`
      );
      return response.data;
    } catch (error) {
      console.log("loi call api", error);
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Success movies");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("Success shows");
      return { ...state, shows: action.payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;
