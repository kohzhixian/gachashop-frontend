import classes from "./css/App.module.css";
import LoginPage from "./pages/LoginPage.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import UserMainPage from "./pages/UserMainPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import OrderInfoPage from "./pages/OrderInfoPage";
import GameCategoryPage from "./pages/GameCategoryPage";

function App() {
  return (
    <Router>
      <nav className={classes.nav_bar}>
        <Link to="/gachashop" className={classes.nav_link}>
          Home
        </Link>
        <div className={classes.dropdown}>
          <Link to="/gachashop/gamecategory" className={classes.nav_link}>
            gamecategory
          </Link>
          <div className={classes.dropdown_content}>
            <Link>GAME 1</Link> <br />
            <Link>GAME 1</Link> <br />
            <Link>GAME 1</Link>
          </div>
        </div>
        <Link to="/gachashop/login" className={classes.nav_link}>
          Login
        </Link>
        <Link to="/gachashop/register" className={classes.nav_link}>
          Register
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/gachashop">
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="gamecategory" element={<GameCategoryPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

/*<Route exact path="/home/:username" element={<UserMainPage />} />*/

/*<nav className={classes.nav_bar}>
          <Link to="/gachashop" className={classes.nav_link}>Home</Link>
          <>
            <Link to="/gachashop/gamecategory" className={classes.nav_link_dropdown}>gamecategory</Link>
            <div className={classes.dropdown_content}>
              <p>GAME 1</p>
            </div>
          </>
          
          <Link to="/gachashop/login" className={classes.nav_link}>Login</Link>
          <Link to="/gachashop/register" className={classes.nav_link}>Register</Link>
      </nav>*/
