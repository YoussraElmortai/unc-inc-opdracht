import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/Home">
          <h1>UNC INC</h1>
        </NavLink>
        <section>
          <button onClick={toggleMenu}>menu</button>
          {isMenuOpen && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <ul>
                <li>
                  <NavLink to="/Home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/Settings">Settings</NavLink>
                </li>
              </ul>
            </div>
          )}
        </section>
      </header>
      <Routes>
        {/* Aangepaste Route-paden om overeen te komen met de NavLink-paden */}
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
