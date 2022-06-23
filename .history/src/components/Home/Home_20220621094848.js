import React, { useEffect } from "react";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
