import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Header = () => {
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
  );
};

export default Header;
