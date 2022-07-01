import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataLogin } from "../../features/movies/loginSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      dataLogin({
        username: username,
        password: password,
      })
    );

    setUsername("");
    setPassword("");

    navigate("/movies-app");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Ten dang nhap</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <p>Mat khau</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
