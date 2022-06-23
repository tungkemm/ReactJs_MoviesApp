import React from "react";
import { useSelector } from "react-redux";
import { getMoviesSelector, getShowsSelector } from "../../features/selectors";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getMoviesSelector);
  const shows = useSelector(getShowsSelector)

  return (
    <div>
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
      <div>
        <h2>Shows</h2>
        {shows.Response === "True" ? (
          shows.Search.map((show, index) => (
            <MovieCard key={index} data={show} />
          ))
        ) : (
          <h3>{shows.Error}</h3>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
