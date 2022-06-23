import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { data } = props;
  const navigate = useNavigate()
  return (
    <div className="card-item">
      <div className="card-inner" onClick={() => navigate(`/movie/${data.imdbID}`)}>
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
