import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMoiveOrShowDetail } from "../../features/movies/movieSlice";
import { getMovieOrShowSelector } from "../../features/selectors";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch()

    const data = useSelector(getMovieOrShowSelector)
    console.log(data)

  useEffect(() => {
    dispatch(fetchAsyncMoiveOrShowDetail(imdbID))
  }, [dispatch, imdbID])
  return <div>MovieDetail</div>;
};

export default MovieDetail;
