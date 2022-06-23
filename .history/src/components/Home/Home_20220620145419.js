import React, { useEffect } from "react";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      );
      console.log(response)
    };

    fetchMovies()
  }, []);
  return <div>Home</div>;
};

export default Home;
