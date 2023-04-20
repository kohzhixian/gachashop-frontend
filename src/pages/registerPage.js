import React, { Fragment, useState } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import ErrorModal from "../components/UI/ErrorModal";

import classes from "../css/Register.module.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const userHandleChange = (e) => {
    setUsername(e.target.value);
  };

  const pwHandleChange = (e) => {
    setPassword(e.target.value);
  };

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const responseData = await response.json();
      const token = responseData.token;
      console.log("token", token);
      if (response.ok) {
        throw new Error(responseData.message);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong, please try again.");
    }

    setIsLoading(false);

    if (username.trim().length === 0) {
      setError({
        title: "All fields must be entered",
        message: "Username cannot be blank",
      });
      return;
    }
    if (password.trim().length === 0) {
      setError({
        title: "All fields must be entered",
        message: "Password cannot be blank",
      });
      return;
    }
    if (email.trim().length === 0) {
      setError({
        title: "All fields must be entered",
        message: "email cannot be blank",
      });
      return;
    }

    navigate("/login");
  };

  const closeError = () => {
    setError(null);
  };

  const handleLogin = e => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <Fragment>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={closeError}
          />
        )}
        <Card className={classes.input}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Username" value={username}>
              Username:
            </label>
            <input
              type="text"
              onChange={userHandleChange}
              value={username}
            ></input>
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              onChange={pwHandleChange}
              value={password}
            ></input>
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              onChange={emailHandleChange}
              value={email}
            ></input>
            <Button type="submit">register</Button>
            <Button type="submit" onClick={handleLogin}>Login</Button>
          </form>
        </Card>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
