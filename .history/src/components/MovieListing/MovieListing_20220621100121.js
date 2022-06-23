import React from "react";
import { useSelector } from "react-redux";
import { getMoviesSelector } from "../../features/selectors";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getMoviesSelector);

  return (
    <div>
      <h2>Movies</h2>
      {movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <h3>{movies.Error}</h3>
      )}
    </div>
  );
};

export default MovieListing;
