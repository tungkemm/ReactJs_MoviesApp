import React from "react";
import { useSelector } from "react-redux";
import { getMoviesSelector, getShowsSelector } from "../../features/selectors";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getMoviesSelector);
  const shows = useSelector(getShowsSelector);

  return (
    <div className="movie-wrapper">
      {/* Moives */}
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))
          ) : (
            <h3>{movies.Error}</h3>
          )}
        </div>
      </div>

      {/* Shows */}
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {shows.Response === "True" ? (
            shows.Search.map((show, index) => (
              <MovieCard key={index} data={show} />
            ))
          ) : (
            <h3>{shows.Error}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
