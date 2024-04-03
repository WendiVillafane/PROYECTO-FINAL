import React, { useState } from "react";
import logo from '../assets/logo.png'
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="menu-barra">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Overview</NavLink>
        </li>
        <li className="menu-barra">
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </li>
        <li className="menu-barra">
          <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</NavLink>
        </li>
        <div className="new-barra">
          <NavLink to="/new" onClick={() => setMenuOpen(false)}>+New</NavLink>
        </div>
      </ul>
    </nav>
  );
};
