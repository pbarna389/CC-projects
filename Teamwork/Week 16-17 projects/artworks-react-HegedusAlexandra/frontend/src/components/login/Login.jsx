import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

import "./Login.css";

const Login = ({ setToken, userName, setUserName }) => {
  const [password, setPassword] = useState(null);

  useEffect(() => {
    console.log(userName, password);
  }, [userName, password]);

  const loginUser = async (credentials) => {
    const fetchData = await fetch("http://localhost:8800/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const response = await fetchData.json();
    console.log(response);
    return response;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      userName,
      password,
    });
    setToken(token);
    sessionStorage.setItem('userName', userName);
  };

  (async function () {
    if (CSS["paintWorklet"] === undefined) {
      await import("https://unpkg.com/css-paint-polyfill");
    }
  
    // The code for this worklet can be found here: https://github.com/georgedoescode/houdini-fleck-patterns/blob/main/fleck-worklet.js
    CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck");
  
    // Fix a weird Safari/Firefox polyfill issue...
    setTimeout(() => {
      document.querySelectorAll(".fleck-demo").forEach((el) => {
        el.style.width = "96%";
      });
    }, 250);
  })();

  return (
    <div class="fleck-demo center-xy" data-theme="grunge">
    <div className="login-wrapper">
      <form onSubmit={handleLogin}>
        <label>
          <p>Username</p>
          <input className="inputField" type="text" onChange={(e) => {setUserName(e.target.value); console.log("pippo",userName)}} data-input="saveUserName" />
        </label>
        <label>
          <p>Password</p>
          <input className="inputField"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button className="submitButton" type="submit" data-btn="saveUserName">Submit</button>
        </div>
      </form>
      <Link to="/registration"><button className="signupButton">Sign up</button></Link>
    </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
