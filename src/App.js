import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage.js";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import Genre from "./pages/Genre";
import AdminMainPage from "./pages/AdminMainPage";
import AuthContext from "./store/AuthContext.js";
import CartProvider from "./store/CartProvider.js";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <CartProvider>
      {authCtx.isLoggedIn && (
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route index element={<MainPage />} />
          <Route path="mainpage" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="admin" element={<AdminMainPage />} />
          <Route path="games/:genre" element={<Genre />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
      {!authCtx.isLoggedIn && <LoginPage />}
    </CartProvider>
  );
};

export default App;
