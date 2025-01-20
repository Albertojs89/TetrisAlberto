// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container border border-info p-3">
      <nav className="d-flex justify-content-start align-items-center">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/partidas" className="nav-link">
              Partidas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ranking" className="nav-link">
              Ranking
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/juego" className="nav-link">
              Juego
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
