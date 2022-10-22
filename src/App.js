import classes from './css/App.module.css';
import LoginPage from './pages/LoginPage.js';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import Header from './components/Header';
import Genre from './pages/Genre';
import OrderInfoPage from './pages/OrderInfoPage'

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
            <Route path="orderinfopage" element={<OrderInfoPage />} />
            <Route path="games/:genre" element={<Genre />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
