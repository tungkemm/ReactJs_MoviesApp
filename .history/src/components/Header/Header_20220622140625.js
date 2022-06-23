import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import {
  filterSearch,
  listSearchHistory,
} from "../../features/movies/filterSearchSlice";
import {
  filterSearchSelector,
  searchHistorySelector,
  usernameLoginSelector,
} from "../../features/selectors";
import { dataLogin } from "../../features/movies/loginSlice";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState("");
  const [showListSearchHistory, setShowListSearchHistory] = useState(false);
  console.log(showListSearchHistory);

  const content = useSelector(filterSearchSelector);
  const searchHistory = useSelector(searchHistorySelector);
  const usernameLogin = useSelector(usernameLoginSelector);

  const submitHandler = (e) => {
    e.preventDefault();

    if (content !== "") {
      dispatch(fetchAsyncMovies(content));
      dispatch(fetchAsyncShows(content));
      dispatch(listSearchHistory(content));
      setInputSearch("");
    } else alert("Chua nhap gi");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(
      dataLogin({
        username: "",
        password: "",
      })
    );
  };

  const handleSearchHistory = (dataSearchHistory) => {
    console.log(123)
    setShowListSearchHistory(false)
    // dispatch(fetchAsyncMovies(dataSearchHistory));
    // dispatch(fetchAsyncShows(dataSearchHistory));
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
            onFocus={() => setShowListSearchHistory(true)}
            // onBlur={() => setShowListSearchHistory(false)}
          />

          {/* lich su tim kiem */}
          {showListSearchHistory && (
            <div className="search-history">
              <p>Lich su tim kiem</p>
              <ul>
                {searchHistory.map((data, index) => (
                  <li key={index} onClick={() => handleSearchHistory(data)}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-login">
        {usernameLogin === "" ? (
          <div onClick={handleLogin}>Login</div>
        ) : (
          <div className="user-login-info">
            <div>{usernameLogin}</div>
            <i class="fa-solid fa-chevron-down"></i>
            <div onClick={handleLogout} className="user-logout">
              Log out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
