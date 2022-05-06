import classes from '../css/loginPage.module.css'

function loginPage(){
    return(
        <div className={classes.loginDiv}>
            <form className={classes.loginForm}>
                <label>Username: </label>
                <input type="text" placeholder="Enter username" name="username" required /> 
                <label>Password</label>
                <input type="password" placeholder="Enter password" name="password" required />
                <button type="submit">Login</button>
                <button type="submit" className={classes.regButton}>Register</button>
            </form>
        </div>
    )
}

export default loginPage;