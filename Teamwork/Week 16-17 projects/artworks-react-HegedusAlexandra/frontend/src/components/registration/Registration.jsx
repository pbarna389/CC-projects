import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const registerUser = async (credentials) => {
        const fetchData = await fetch("http://localhost:8800/registration", {
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

    const handleRegistration = async (event) => {
        event.preventDefault();
        const userData = await registerUser({
            "creditentials" : {
                userName,
                password,
            }, "favourited": []
        });
        return userData
      };

    return (
        <div className="reg-wrapper">
            <h1>REGISTRATION</h1>
            <form onSubmit={handleRegistration}>
                <label>
                <p>Enter you user name</p>
                <input className="inputField" type="text" onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                <p>Enter your password</p>
                <input className="inputField"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <div>
                <button className="registerButton" type="submit">Register</button>
                </div>
            </form>
            </div>
    )
}

export default Registration