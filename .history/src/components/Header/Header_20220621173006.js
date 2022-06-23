import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { filterSearch } from "../../features/movies/filterSearchSlice";
import { filterSearchSelector } from "../../features/selectors";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState("");
  const content = useSelector(filterSearchSelector);

  const submitHandler = (e) => {
    e.preventDefault();

    if (content !== "") {
      dispatch(fetchAsyncMovies(content));
      dispatch(fetchAsyncShows(content));
      //   setInputSearch(content)
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
            onChange={(e) => {
              setInputSearch(e.target.value);
              dispatch(filterSearch(e.target.value));
            }}
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
