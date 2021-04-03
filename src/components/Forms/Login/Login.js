import React, { useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const clearForm = () => {
    setLoginUsername("");
    setLoginPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = {
      username: loginUsername,
      password: loginPassword,
    };
    axios
      .post("http://localhost:5000/login", form)
      .then((res) => console.log(res));

    clearForm();
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Username"
        value={loginUsername}
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default Login;
