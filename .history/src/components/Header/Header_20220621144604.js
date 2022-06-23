import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="logo" onClick={() => {
                navigate("/")
            }}>Movie App</div>
        </div>
    );
};

export default Header;