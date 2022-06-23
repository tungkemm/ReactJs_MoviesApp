import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MovieCard.scss";
import { usernameLoginSelector } from "../../features/selectors";

const MovieCard = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const dataLogin = useSelector(usernameLoginSelector);

  return (
    <div className="card-item">
      <div
        className="card-inner"
        onClick={() => {
          dataLogin !== ""
            ? navigate(`/movie/${data.imdbID}`)
            : alert("Chua dang nhap");
        }}
      >
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
