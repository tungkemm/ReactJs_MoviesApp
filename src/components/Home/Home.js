import React, { useEffect } from "react";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initContentMovie = 'Harry'
    const initContentShows = 'Girl'
    dispatch(fetchAsyncMovies(initContentMovie));
    dispatch(fetchAsyncShows(initContentShows))
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
