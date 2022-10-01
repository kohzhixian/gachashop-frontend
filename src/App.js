import classes from "./css/App.module.css";
import LoginPage from "./pages/LoginPage.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import ActionPage from "./pages/genre/Action"
import AdventurePage from "./pages/genre/Adventure"
import OpenWorldPage from "./pages/genre/OpenWorld"
import PuzzlePage from "./pages/genre/Puzzle"
import RpgPage from "./pages/genre/Rpg"
import TowerDefensePage from "./pages/genre/TowerDefense"
import VisualNovelPage from "./pages/genre/VisualNovel"

function App() {
  return (
    <Router>
      <nav className={classes.nav_bar}>
        <Link to="/gachashop" className={classes.nav_link}>
          Home
        </Link>
        <Link to="/gachashop/aboutus" className={classes.nav_link}>
          About Us
        </Link>
        <Link to="/gachashop/login" className={classes.nav_link}>
          Login
        </Link>
        <Link to="/gachashop/register" className={classes.nav_link}>
          Register
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<ActionPage />} />
        <Route path="/gachashop">
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="action" element={<ActionPage />} />
          <Route path="adventure" element={<AdventurePage />} />
          <Route path="openworld" element={<OpenWorldPage />} />
          <Route path="puzzle" element={<PuzzlePage />} />
          <Route path="rpg" element={<RpgPage />} />
          <Route path="towerdefense" element={<TowerDefensePage />} />
          <Route path="visualnovel" element={<VisualNovelPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
