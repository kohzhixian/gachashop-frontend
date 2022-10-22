import React, { useState } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import ErrorModal from "../components/UI/ErrorModal";

import classes from "../css/Register.module.css";

const RegisterPage = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState();

    const userHandleChange = e => {
        setUsername(e.target.value)
    }

    const pwHandleChange = e => {
        setPassword(e.target.value)
    }

    const emailHandleChange = e => {
        setEmail(e.target.value)
    }

    const addressHandleChange = e => {
        setAddress(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(username.trim().length === 0){
            setError({
                title: "All fields must be entered",
                message: "Username cannot be blank"
            })
            return;
        }
        if(password.trim().length === 0){
            setError({
                title: "All fields must be entered",
                message: "Password cannot be blank"
            })
            return;
        }
        if(email.trim().length === 0){
            setError({
                title: "All fields must be entered",
                message: "email cannot be blank"
            })
            return;
        }
        if(address.trim().length === 0){
            setError({
                title: "All fields must be entered",
                message: "Address cannot be blank"
            })
            return;
        }
    }

    const closeError = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeError}/>}
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Username" value={username}>Username:</label>
                    <input type="text" onChange={userHandleChange}></input>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" onChange={pwHandleChange} value={password}></input>
                    <label htmlFor="Email">Email:</label>
                    <input type="email" onChange={emailHandleChange} value={email}></input>
                    <label htmlFor="Address">Address:</label>
                    <input type="text" onChange={addressHandleChange} value={address}></input>
                    <Button type="submit">Login</Button>
                    <Button>Register</Button>
                </form>
            </Card>
        </div>
    )
}

export default RegisterPage;