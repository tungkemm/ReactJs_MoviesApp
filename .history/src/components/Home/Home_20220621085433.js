import React, { useEffect } from "react";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovie } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(
          `?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
        dispatch(addMovie(response.data));
      } catch (error) {
        console.log("loi", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
