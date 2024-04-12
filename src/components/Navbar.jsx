import React, { useState } from "react"; 
import logo from '../assets/logo.png' 
import "./Navbar.css"; 
import { Link, NavLink } from "react-router-dom"; 


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  return (
    <nav> 
      {/* Enlace al inicio con el logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" /> 
      </Link>
      {/* Icono de menú para dispositivos móviles */}
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}> 
        {/* Enlace para la vista general */}
        <li className="menu-barra">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Overview</NavLink>
        </li>
        {/* Enlace para la página de contacto */}
        <li className="menu-barra">
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </li>
        {/* Enlace para la lista de favoritos */}
        <li className="menu-barra">
          <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</NavLink>
        </li>
        {/* Enlace para agregar un nuevo contacto */}
        <div className="new-barra">
          <NavLink to="/new" onClick={() => setMenuOpen(false)}> +NEW</NavLink>
        </div>
      </ul>
    </nav>
  );
};
