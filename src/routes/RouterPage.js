import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home/Home";
import MovieDetail from "../page/MovieDetail/MovieDetail";
import PageNotFound from "../page/PageNotFound/PageNotFound";
import Login from "../page/Login/Login";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/movies-app" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie/:imdbID" element={<MovieDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouterPage;
