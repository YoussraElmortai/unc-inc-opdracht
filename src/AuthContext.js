import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  // met welke username en wachtwoord kan je inloggen
  const handleLogin = (username, password) => {
    if (username === "uncinc" && password === "letmein") {
      setLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };
  // om login status te veranderen wanneer de gebruiker uitgelogd is
  const handleLogout = () => {
    setLoggedIn(false);
  };

  const authContextValue = {
    loggedIn,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
