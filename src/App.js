import React, { useContext } from "react";
import LoginPage from "./pages/loginPage.js";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import Genre from "./pages/Genre";
import OrderInfo from "./pages/orderInfoPage";
import AdminMainPage from "./pages/adminPage";
import AuthContext from "./store/AuthContext.js";
import CartProvider from "./store/CartProvider.js";
const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <CartProvider>
      {authCtx.isLoggedIn && (
        <Routes>
          <Route exact path="/" element={<AdminMainPage />} />
          <Route index element={<AdminMainPage />} />
          <Route path="mainpage" element={<MainPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="admin" element={<AdminMainPage />} />
          <Route path="games/:genre" element={<Genre />} />
          <Route path="orderInfo" element={<OrderInfo />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}

      {!authCtx.isLoggedIn && (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </CartProvider>
  );
};

export default App;
