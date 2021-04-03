import React, { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const clearForm = () => {
    setRegisterUsername("");
    setRegisterPassword("");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const form = {
      username: registerUsername,
      password: registerPassword,
    };
    axios
      .post("http://localhost:5000/register", form)
      .then((res) => console.log(res));

    clearForm();
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="Username"
        value={registerUsername}
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Submit</button>
    </div>
  );
};

export default Register;
