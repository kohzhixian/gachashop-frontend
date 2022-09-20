import { useState } from 'react';
import classes from '../css/loginPage.module.css'
import { useNavigate } from 'react-router-dom'


function LoginPage(){

    const [errorMsg, setErrorMsg] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const data = [
        {
            username: "admin",
            password: "password"
        },
        {
            username: "user",
            password: "password"
        }
    ];

    const errors = {
        username: "invalid username",
        password: "invalid password"
    };

    
    const handleSubmit = (event) => {
        //prevent page reload    
        event.preventDefault();

        var {username, password} = document.forms[0];

        //find user login info
        const userData = data.find((user) => user.username === username.value);

        //compare userinfo
        if(userData){
            if(userData.password !== password.value) {
                setErrorMsg({name: "password", message: errors.password});
            }else{
                setIsSubmitted(true);
            }
        }else{
            setErrorMsg({name: "username", message: errors.username})
        }
    };

    const renderErrorMsg = (name) =>
        name === errorMsg.name && (
            <div>{errorMsg.message}</div>
        )

    const renderLoginForm = (
        <div className={classes.loginDiv}>
        {/*By assigning handlesubmit function to onsubmit property of form, 
            the handlesubmit() is triggered everytime input type of "submit" is clicked*/}
            <form className={classes.loginForm} onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" placeholder="Enter username" name="username" required /> 
                {renderErrorMsg("username")}
                <label>Password</label>
                <input type="password" placeholder="Enter password" name="password" required />
                {renderErrorMsg("password")}
                <input type="submit" value="Login"/>
                <input type="submit" value="Register" className={classes.regButton}/>

                
                
            </form>
        </div>
    )
    var navigate = useNavigate();
    return(
        <div>
            {isSubmitted? <div>User is successfully logged in</div> : renderLoginForm}
            <button onClick={()=>{
                navigate("/register")
            }}>TEST REGISTER</button>
        </div>
        
    )
}

export default LoginPage;