import React, { useEffect } from "react";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows())
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
