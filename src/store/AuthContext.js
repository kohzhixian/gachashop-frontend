import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isAdmin: false,
  onLogin: () => {},
  checkAdmin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const setLoginHandler = () => {
    setIsLoggedIn(true);
  };

  const setLogoutHandler = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const setAdminHandler = () => {
    setIsAdmin(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isAdmin: isAdmin,
        onLogin: setLoginHandler,
        checkAdmin: setAdminHandler,
        onLogout: setLogoutHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
