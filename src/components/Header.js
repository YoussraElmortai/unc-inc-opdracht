import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
    <header>
      <NavLink to="/home">
        <h1>UNC INC</h1>
      </NavLink>
      <section>
        <button onClick={toggleMenu}>menu</button>
        {isMenuOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <ul>
              <NavLink to="/home">
                <li>Home</li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>Dashboard</li>
              </NavLink>
              <NavLink to="/login">
                <li>Login / logout</li>
              </NavLink>
            </ul>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
