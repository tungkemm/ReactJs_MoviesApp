import React, { useEffect } from "react";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(
          `?apiKey=${APIKey}&s=${movieText}&type=movieaaaaa`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
  return <div>Home</div>;
};

export default Home;
