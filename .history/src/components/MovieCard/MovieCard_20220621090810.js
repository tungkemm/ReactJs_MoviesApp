import React from "react";

const MovieCard = (props) => {
  const { data } = props;
  return <div>
    <img src={data.Poster} alt={data.Title}/>
    <h4>{data.Title}</h4>
    <p>{data.Year}</p>
  </div>;
};

export default MovieCard;
