import React, { useState } from "react";
import { useAuth } from "../AuthContext";
// met useAuth kan ik controleren of een gebruiker ingeglogd of niet is
// Daarna kan ik bepalen hoe de pagina hier op kan reageren
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const { loggedIn, handleLogin, handleLogout } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  // twee manieren van notatie die werken
  //  const [username, setUsername] = React.useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const success = handleLogin(username, password);
    if (success) {
      navigate("/home");
    } else {
      alert("Incorrect username or password. Please try again.🤔✨");
    }
  };
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <>
      {loggedIn ? (
        <div className="logout">
          {/* als gebruiker ingelogd is geef optie om weer voor uitloggen */}
          <p>Welkom! Je bent ingelogd.</p>
          <button onClick={handleLogoutClick}>Uitloggen</button>
        </div>
      ) : (
        <main className="loginform">
          <h2>Login to uncinc</h2>
          <form onSubmit={onSubmit}>
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
      )}
    </>
  );
};

export default Loginform;
