import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import ErrorModal from "../components/UI/ErrorModal";
import AuthContext from "../store/AuthContext";

import classes from "../css/LoginPage.module.css";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const userHandleChange = (e) => {
    setUsername(e.target.value);
  };

  const pwHandleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    } else {
      authCtx.onLogin();
      navigate("/mainpage");
    }

    // do authrization check
    // if success-> change state + redirect
    // if fail, throw error
  };

  const errorHandler = () => {
    setError(null);
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
          <label htmlFor="Username" value={username}>
            Username:
          </label>
          <input type="text" onChange={userHandleChange}></input>
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            onChange={pwHandleChange}
            value={password}
          ></input>
          <Link to="/login">
            <Button type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Link>
          <Button>Register</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default LoginPage;
