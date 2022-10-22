import React, { useState } from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import ErrorModal from "../components/UI/ErrorModal";

import classes from "../css/LoginPage.module.css";

const LoginPage = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const userHandleChange = e => {
        setUsername(e.target.value)
    }

    const pwHandleChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(username.trim().length === 0){
            setError({
                title: "All fields must be entered",
                message: "Username cannot be empty"
            })
            return;
        }
        if(password.trim().length < 8){
            setError({
                title: "All fields must be entered",
                message: "Password cannot be less than 8 character"
            })
            return;
        }
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Username" value={username}>Username:</label>
                    <input type="text" onChange={userHandleChange}></input>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" onChange={pwHandleChange} value={password}></input>
                    <Button type="submit">Login</Button>
                    <Button>Register</Button>
                </form>
            </Card>
        </div>
    )
}

export default LoginPage;






