import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { resetSelectMovieOrShow } from '../../features/movies/movieSlice';
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    return (
        <div className="header">
            <div className="logo" onClick={() => {
                navigate("/")
                dispatch(resetSelectMovieOrShow())
            }}>Movie App</div>
        </div>
    );
};

export default Header;