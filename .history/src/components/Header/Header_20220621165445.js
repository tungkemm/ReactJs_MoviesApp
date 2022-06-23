import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputSearch !== "") {
      dispatch(fetchAsyncMovies(inputSearch));
      dispatch(fetchAsyncShows(inputSearch));
      setInputSearch("");
    } else alert("Chua nhap gi");
  };
  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        Movie App
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={inputSearch}
            placeholder="Search Movies or Shows"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-login">Username</div>
    </div>
  );
};

export default Header;
