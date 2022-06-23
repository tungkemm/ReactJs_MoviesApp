import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import {
  deleteItemSearchHistory,
  listSearchHistory,
} from "../../features/movies/filterSearchSlice";
import {
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

  const searchHistory = useSelector(searchHistorySelector);
  const usernameLogin = useSelector(usernameLoginSelector);

  /// xu ly khi an vao btn tim kiem
  const submitHandler = (e) => {
    e.preventDefault();
    setShowListSearchHistory(false);

    if (inputSearch !== "") {
      dispatch(fetchAsyncMovies(inputSearch));
      dispatch(fetchAsyncShows(inputSearch));
      dispatch(
        listSearchHistory({
          id: Math.floor(Math.random() * 100000),
          item: inputSearch,
        })
      );

      setInputSearch("");
    } else {
      alert("Chua nhap gi");
    }
  };

  /// xu ly header login logout
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

  /// xu ly lich su tim kiem
  const handleSearchHistory = (dataSearchHistory) => {
    dispatch(fetchAsyncMovies(dataSearchHistory));
    dispatch(fetchAsyncShows(dataSearchHistory));
    setShowListSearchHistory(false);
  };

  const handleDeleteSearchHistory = (idSearchHistory, event) => {
    event.stopPropagation(); // ngung sui bot
    dispatch(deleteItemSearchHistory(idSearchHistory));
  };

  return (
    <div className="header">
      {/* Header logo */}
      <div
        className="logo"
        onClick={() => {
          navigate("/movies-app");
        }}
      >
        Movie App
      </div>

      {/* Header search */}
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={inputSearch}
            placeholder="Search Movies or Shows"
            onChange={(e) => setInputSearch(e.target.value)}
            onFocus={() => setShowListSearchHistory(true)}
          />

          {/* lich su tim kiem */}
          {showListSearchHistory && (
            <div className="search-history">
              <p>Lich su tim kiem</p>
              <ul>
                {searchHistory.map((data, index) => (
                  <li
                    key={index}
                    onClick={() => handleSearchHistory(data.item)}
                  >
                    <span>{data.item}</span>
                    <i
                      onClick={(event) =>
                        handleDeleteSearchHistory(data.id, event)
                      }
                      class="fa-solid fa-xmark"
                    ></i>
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

      {/* Header login */}
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
