import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import ErrorModal from "../components/UI/ErrorModal";
import AuthContext from "../store/AuthContext";
import Cookies from "js-cookie";

import classes from "../css/loginPage.module.css";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const userHandleChange = (e) => {
    setUsername(e.target.value);
  };

  const pwHandleChange = (e) => {
    setPassword(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        setError({
          title: "Login Failed",
          message: "Wrong credentials, please try again",
        });
        return;
      } else {
        const token = responseData.token;
        localStorage.setItem('token', token);
        authCtx.onLogin();
        navigate("/mainpage");
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong, please try again.");
    }

    if (username.trim().length === 0) {
      setError({
        title: "All fields must be entered",
        message: "Username cannot be empty",
      });
      return;
    }
    if (password.trim().length < 8) {
      setError({
        title: "All fields must be entered",
        message: "Password cannot be less than 8 character",
      });
      return;
    }

    if (username === "kzx" && password === "password123") {
      authCtx.onLogin();
      authCtx.checkAdmin();
      navigate("/mainpage");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            onChange={userHandleChange}
            value={username}
          ></input>
          <label htmlFor="Password">Password:</label>
          <input type="password" onChange={pwHandleChange} value={password} />
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
          <Button type="submit" onClick={handleRegister}>
            Register
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default LoginPage;
