import classes from './css/App.module.css';
import LoginPage from './pages/loginPage.js';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RegisterPage from './pages/registerPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import ActionPage from './pages/genre/Action';
import AdventurePage from './pages/genre/Adventure';
import OpenWorldPage from './pages/genre/OpenWorld';
import PuzzlePage from './pages/genre/Puzzle';
import RpgPage from './pages/genre/Rpg';
import TowerDefensePage from './pages/genre/TowerDefense';
import VisualNovelPage from './pages/genre/VisualNovel';
import Header from './components/Header';
import Genre from './pages/Genre';

function App() {
  return (
    <div>
      <Header />
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
          <Route exact path="/" element={<MainPage />} />
          <Route path="/gachashop">
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            {/* <Route path="action" element={<ActionPage />} />
            <Route path="adventure" element={<AdventurePage />} />
            <Route path="openworld" element={<OpenWorldPage />} />
            <Route path="puzzle" element={<PuzzlePage />} />
            <Route path="rpg" element={<RpgPage />} />
            <Route path="towerdefense" element={<TowerDefensePage />} />
            <Route path="visualnovel" element={<VisualNovelPage />} /> */}
            <Route path="games/:genre" element={<Genre />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
