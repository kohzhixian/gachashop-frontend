import React, { useContext } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

const NavBar = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <nav className={classes.nav_bar}>
      <Link to="/mainpage" className={classes.nav_link}>
        Home
      </Link>
      <Link to="/aboutus" className={classes.nav_link}>
        About Us
      </Link>
      <Link to="/login" className={classes.nav_link}>
        Login
      </Link>
      <Link to="/register" className={classes.nav_link}>
        Register
      </Link>
      {authCtx.isAdmin && (
        <Link to="/admin" className={classes.nav_link}>
          Admin
        </Link>
      )}
      <Link to="/login" className={classes.nav_link} onClick={authCtx.onLogout}>
        Logout
      </Link>
    </nav>
  );
};
export default NavBar;
