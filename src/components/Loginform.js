import React, { useState } from "react";
import Home from "../pages/Home";

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "uncinc" && password === "letmein") {
      setLoggedIn(true);
    } else {
      alert("Incorrect username or password. Please try again.🤔✨");
    }
  };

  if (loggedIn) {
    return <Home />;
  }
  return (
    <>
      <main className="loginform">
        <h2>Welkom</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <label>
            Gebruikersnaam:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Wachtwoord:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">login</button>
        </form>
      </main>
    </>
  );
};

export default Loginform;
