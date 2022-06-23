import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataLogin } from "../../features/movies/loginSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
  };

  return (
    <div>
      <form>
        <div onSubmit={handleSubmit}>
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
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
